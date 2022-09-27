const {PrismaClient} = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');

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

        const reservations = await prisma.reservation.create({
            data: {
                startDateTime: startDateTime,
                endDateTime: endDateTime,
                created_at: new Date(),
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

/**
Nesta issue deve ser criado um CRUD (Create, Read, Update, Delete) genérico para reservas.
Para a criação do crud, pode ser utilizado rotas separadas padronizando a utilização apenas do metodo REST POST/GET:
Ex:
/reservations/create
/reservations/update
/reservations/delete
/reservations 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0ZDIyMGQwLWY3NDgtNGM3Ni1iNGVlLWRkYTY0MmQwYTNlNiIsInJhIjo0OTgzMzQ4OTQsInJvbGUiOiJVc2VyIiwiaWF0IjoxNjY0MjUwNzQxLCJleHAiOjE2OTU4MDgzNDF9.IPuB4o3nbAa86tXK3BFN8yb9-ajEdeodmzK0kTToNaU
*/