const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');

module.exports = app => {
    app.post('/sports/create', auth, async (req, res) => {
        const { name, maxAmount} = req.body
        if (!name) return res.send("Nome do esporte não inserido!");
        const sports = await prisma.sport.create({
            data: {
                name: name,
                maxAmount: maxAmount
            },
        })
        res.json(sports);
    })
    app.get('/sports', async (req, res) => {
        const {sports, maxAmount} = await prisma.sport.findMany({
            where: {
                name: {
                    not: undefined
                },
                maxAmount: {
                    not: undefined
                }
            },
        })
        res.json(sports);
    })
    app.put('/sports/update', auth, async (req, res) => {
        const { id, name, maxAmount } = req.body;
        const sports = await prisma.sport.update({
            where: {
                id: id
            },
            data: {
                name: name,
                maxAmount: maxAmount
            },
        })
        res.json(sports);
    })
    app.delete('/sports/delete', auth, async (req, res) => {
        const { id } = req.body;
        const sports = await prisma.sport.delete({
            where: {
                id: id
            },
        })
        res.json(sports);
    })
}