const {PrismaClient} = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');
const moment = require('moment');

module.exports = app =>{

    app.get('/reservations', auth, async (req, res) => {

        const reservations = await prisma.reservation.findMany({
            where:{
                id: {
                    not: undefined
                }},
        })
        res.json(reservations);
    });

    app.post('/reservations/create/', auth, async (req, res) => {

        const{ startDateTime, endDateTime, manager_id, participants, requested_participants, max_participants, sportId, courtId, description} = req.body;

        if(!startDateTime || !endDateTime || !manager_id || !max_participants || !sportId || !courtId){
            res.send('Favor, insira todos os dados necessários');
        }

        const start = new Date(startDateTime)
        console.log(start)

        const reservated = await prisma.reservation.findMany({
            where: {
                startDateTime:{
                    gte: new Date(startDateTime),
                    lte: new Date(endDateTime)
    
                },
                endDateTime:{
                    gte: new Date(startDateTime),
                    lte: new Date(endDateTime)
                }
            }
        })  
        reservated.forEach(reservation => {
            if(moment(startDateTime).isBetween(reservation.startDateTime, reservation.endDateTime, 'minutes')){
                res.send(`Uma reserva já foi feita entro do horário passado.`);
                return;
            }
            if(moment(endDateTime).isBetween(reservation.startDateTime, reservation.endDateTime, 'minutes'))
            return res.send('Uma reserva já foi feita entro do horário passado.')
        })

        const reservations = await prisma.reservation.create({
            data: {
                startDateTime: new Date(startDateTime),
                endDateTime: new Date(endDateTime),
                manager_id: manager_id,
                participants: participants,
                requested_participants: requested_participants,                
                max_participants: max_participants,
                sportId: sportId,
                courtId: courtId,
                description: description
            }
        })

        return res.json(reservations);
    });

    app.put('/reservations/update', auth, async (req, res) => {

        const {reservationId, startDateTime, endDateTime, max_participants, sportId, courtId, description} = req.body;

        const reservation = await prisma.reservation.update({
            where: {
                id: reservationId
            },
            data: {
                startDateTime: startDateTime,
                endDateTime: endDateTime,
                max_participants: max_participants,
                sportId: sportId,
                courtId: courtId,
                description: description
            }
        })

        res.json(reservation);
    });


    app.delete('/reservations/delete', auth, async (req, res) => { 

        const {reservationId} = req.body;

        const reservations = await prisma.reservation.delete({
            where: {
                id: reservationId
            },
        })
        res.json(reservations);
    });


}