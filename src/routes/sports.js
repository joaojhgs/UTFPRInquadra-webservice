const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');

module.exports = app => {
    app.post('/sports/create', auth, async (req, res) => {
        const { name } = req.body
        if (!name) return res.send("Nome do esporte não inserido!");
        const sports = await prisma.sport.create({
            data: {
                name: name
            },
        })
        res.json(sports);
    })
    app.get('/sports', async (req, res) => {
        const sports = await prisma.sport.findMany({
            where: {
                name: {
                    not: undefined
                },
            },
        })
        res.json(sports);
    })
    app.put('/sports/update', auth, async (req, res) => {
        const { id } = req.body;
        const { name } = req.body;
        const sports = await prisma.sport.update({
            where: {
                id: id
            },
            data: {
                name: name
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