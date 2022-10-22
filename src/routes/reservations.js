const {PrismaClient} = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');
const moment = require('moment');

module.exports = app =>{

    app.get('/reservations', (req, res, next) => auth(req, res, next, 'User'), async (req, res) => {

        const reservations = await prisma.reservation.findMany({
            where:{
                id: {
                    not: undefined
                }},
        })
        res.json(reservations);
    });

    app.post('/reservations/create/', (req, res, next) => auth(req, res, next, 'User'), async (req, res) => {
        try{
            const{startDateTime, endDateTime, managerId, maxParticipants, sportId, courtId, description} = req.body;
            if(!startDateTime || !endDateTime || !managerId || !maxParticipants || !sportId || !courtId)
            throw 400
    
            const start = new Date(startDateTime)
            const end = new Date(endDateTime)
    
            const reservated = await prisma.reservation.findMany({
                where: {
                    startDateTime:{
                        gte: start,
                        lt: end
                    },
                    endDateTime:{
                        gt: start,
                        lte: end
                    }
                }
            })
            reservated.forEach(reservation => {
                if(moment(start).isBetween(reservation.startDateTime, reservation.endDateTime, 'minutes', '[]'))
                throw 402;
    
                if(moment(end).isBetween(reservation.startDateTime, reservation.endDateTime, 'minutes', '[]'))
                throw 402;
            });
    
            const reservations = await prisma.reservation.create({
                data: {
                    startDateTime: start,
                    endDateTime: end,
                    manager_id: managerId,
                    max_participants: maxParticipants,
                    sportId: sportId,
                    courtId: courtId,
                    description: description
                }
            })
    
            return res.json(reservations);
     
        } catch(error){
    
            if(error == 400){
                return res.send('Favor, insira todos os dados necessários')
            }
    
            else if(error == 402){
                return res.send('Uma reserva já foi feita dentro do horário passado.')
            }
        }

    });

    app.put('/reservations/update/', ( req, res, next) => auth( req, res, next, 'User'), async (req, res) =>{

        const {reservationId, userId, startDateTime, endDateTime, sportId, courtId, maxParticipants, description} = req.body
        if(!reservationId || !userId || !startDateTime || ! endDateTime || !sportId || !courtId || !maxParticipants)
        return res.send('Favor, insira todos os dados necessários')

        try{
            const reservation = await prisma.reservation.findUnique({
                where: {
                    id: reservationId
                }
            })
            if(reservation.manager_id != userId)
            throw new Error(401)
        }catch(error){
            return res.send(`Não é possível atualizar a reserva. ${error}. Usuário não possui permissão para efetuar a atualização`)
        }

        const start = new Date(startDateTime)
        const end = new Date(endDateTime)
        try{
            const reservated = await prisma.reservation.findMany({
                where: {
                    startDateTime:{
                        gte: start,
                        lt: end
                    },
                    endDateTime:{
                        gt: start,
                        lte: end
                    }
                }
            })
            reservated.forEach(reservation => {
                if(reservation.id == reservationId);

                else if(moment(start).isBetween(reservation.startDateTime, reservation.endDateTime, 'minutes', '[]'))
                throw new Error(402);
    
                else if(moment(end).isBetween(reservation.startDateTime, reservation.endDateTime, 'minutes', '[]'))
                throw new Error(402);
            })
        }catch(error){
            return res.send(`Uma reserva já foi feita dentro do horário passado. ${error}`)
        }

        try{
            const updated = await prisma.reservation.update({
                where: {
                    id: reservationId,
                },
                data:{
                    startDateTime: start,
                    endDateTime: end,
                    sportId: sportId,
                    courtId: courtId,
                    max_participants: maxParticipants,
                    description: description
                }
            })
            if(!updated) 
            throw new Error(500)

            return res.json(updated)

        }catch(error){
            return res.status(error).send('Não foi possível realizar a atualização tente novamente')
        }

    });

    app.delete('/reservations/delete/', (req, res, next) => auth(req, res, next, 'User'), async (req, res) => { 
        
        const{reservationId, userId} = req.body
        if(!reservationId || !userId)
        return res.send('Favor insira os dados corretamente');

        try{
            const reservation = await prisma.reservation.findUnique({
                where: {
                    id: reservationId
                }
            })
            if(reservation.manager_id != userId)
            throw new Error(402)
        }catch(error){
            return res.send(`Não é possível desfazer a reserva. ${error}. Usuário não possui permissão para efetuar a atualização`)
        }

        try{
            const deleted = await prisma.reservation.delete({
                where: {
                    id: reservationId
                }
            })
            if(!deleted)
            throw new Error(500)

            return res.json(deleted)
        }catch(error){
            return res.status(error).send('Não foi possível desfazer a reserva. Tente novamente')
        }
    });
}