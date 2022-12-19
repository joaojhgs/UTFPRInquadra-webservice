const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');

module.exports = app => {

    app.get('/courts', async (req, res) => {
        const courts = await prisma.court.findMany({
            where: {
                name: {
                    not: undefined
                },
                // campi: {
                //     not: undefined
                // }
            },
        })
        res.json(courts)
    })

    app.post('/courts/create', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        const { name } = req.body
        if (!name) return res.send("Nome não inserido!");
        if (await prisma.court.findFirst({ where: { name: { equals: name } } })) return res.send("Uma quadra com esse nome já existe!");
        const courts = await prisma.court.create({
            data: {
                name: name,
            }
        })
        res.json(courts);
    })

    app.post('/courts/update', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        const { id } = req.body;
        const { name } = req.body;
        // const { campi } = req.body;
        const courts = await prisma.court.update({
            where: {
                id: id
            },
            data: {
                name: name
            },
        })
        res.json(courts)
    })

    app.post('/courts/delete', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        const { id } = req.body;
        const courts = await prisma.court.delete({
            where: {
                id: id
            },
        })
        res.json(courts);
    })
}