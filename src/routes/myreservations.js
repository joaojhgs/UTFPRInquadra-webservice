const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');
const jsonwebtoken = require("jsonwebtoken");

module.exports = app => {
    app.get('/myReservation', (req, res, next) => auth(req, res, next, 'User'), async (req, res) => {
        const { authorization } = req.headers
        const token = authorization?.split(' ')[1]
        const user = jsonwebtoken.verify(token, process.env.JWT_SECRET_TOKEN, {complete: true})

        const userId = user.payload.id

        const myReservation = await prisma.reservation.findMany({
            where: {
                participants: userId
            }
        })

        return res.send(myReservation)
    })
}
