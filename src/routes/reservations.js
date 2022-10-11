const {PrismaClient} = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');
const moment = require('moment');
const { nextTick } = require('process');

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
        try{
            const{startDateTime, endDateTime, manager_id, participants, requested_participants, max_participants, sportId, courtId, description} = req.body;
            if(!startDateTime || !endDateTime || !manager_id || !max_participants || !sportId || !courtId)
            throw 400
    
            const start = new Date(startDateTime)
            const end = new Date(endDateTime)
    
            const reservated = await prisma.reservation.findMany({
                where: {
                    startDateTime:{
                        gte: start,
                        lte: end
                    },
                    endDateTime:{
                        gte: start,
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
     
        } catch(error){
    
            if(error == 400){
                return res.send('Favor, insira todos os dados necessários')
            }
    
            else if(error == 402){
                return res.send('Uma reserva já foi feita dentro do horário passado.')
            }
        }

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

