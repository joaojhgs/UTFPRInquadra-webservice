const { start } = require('repl');
const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');
const moment = require('moment');

module.exports = app => {

    app.post('/unavailableTime/create', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        try{
        const { courtId, startDateTime, endDateTime, startTime, endTime, daysOfTheWeek, singleOccurency} = req.body;
        
        if(courtId){
            if(!(daysOfTheWeek && startTime && endTime) | !(startDateTime && endDateTime))
                throw 400;
        } else {
            throw 400;
        }
        
        const start = new Date(startTime);
        const end = new Date(endTime);

        const unavailable = await prisma.unavailableTime.findMany({
            where: {
                startTime:{
                    gte: start,
                    lt: end
                },
                endTime:{
                    gt: start,
                    lte: end
                }
            }
        })
        unavailable.forEach(unavailableTime => {
            if(moment(start).isBetween(unavailableTime.startTime, unavailableTime.endTime, 'minutes', '[]'))
            throw 402;
                if(moment(end).isBetween(unavailableTime.startTime, unavailableTime.endTime, 'minutes', '[]'))
                throw 402;
            })
            
            const unavailableTime = await prisma.unavailableTime.create({
                data: {
                    startTime: start,
                    endTime: end,
                    singleOccurency: singleOccurency,
                    daysOfTheWeek: {
                        connectOrCreate:{create:{dayOfTheWeekId: daysOfTheWeek}}
                    },
                    courtId: courtId,
                },
            })
            
            console.log('ok!');
            res.json(unavailableTime);
        }catch(error){
            if(error == 400)
            return res.send(`Favor, insira todos os dados necessários. ${error}`);

            if(error == 402)
            return res.send(`Uma reserva já foi feita dentro do horário passado. ${error}`)
        }
    })

    app.get('/unavailableTime', async (req, res) => {
        const unavailableTime = await prisma.unavailableTime.findMany({
            where: {
                id: {
                    not: undefined
                }
            },
        })
        res.json(unavailableTime);
    });

    app.put('/unavailableTime/update', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        try{
        const { id, startTime, endTime, dayOfTheWeek, singleOccurency } = req.body;
        if(!id || !startTime || !endTime || !dayOfTheWeek || !singleOccurency)
        throw 400;

        const start = new Date(startTime)
        const end = new Date(endTime)

            const unavailable = await prisma.unavailableTime.findMany({
                where: {
                    startTime: {
                        gte: start,
                        lt: end
                    },
                    endTime: {
                        gt: start,
                        lte: end
                    }
                }
            })
            unavailable.forEach(unavailable => {
                if(moment(start).isBetween(unavailable.startTime, unavailable.endTime, 'minutes', '[]'))
                throw 402;
                if(moment(end).isBetween(unavailable.startTime, unavailable.endTime, 'minutes', '[]'))
                throw 402; 
            })


        const unavailableTime = await prisma.unavailableTime.update({
            where: {
                id: id
            },
            data: {
                startTime: startTime,
                endTime: endTime,
                dayOfTheWeek: dayOfTheWeek,
                singleOccurency: singleOccurency
            },
        })
        res.json(unavailableTime);

        }catch(error){
            if(error == 400)
            return res.send("Favor insira todos os dados necessários");

            if(error == 402)
            return res.send(`Uma reserva já foi feita dentro do horário passado. ${error}`)
        }
    })

    app.delete('/unavailableTime/delete', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        const { id } = req.body;

        const unavailableTime = await prisma.unavailableTime.delete({
            where: {
                id: id
            },
        })
        res.json(unavailableTime);
    })

}