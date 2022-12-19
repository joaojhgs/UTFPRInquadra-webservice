const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient();
const auth = require('../middlewares/auth');

module.exports = app => {
    app.get('/sports', async (req, res) => {
        const sports = await prisma.sport.findMany({
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

    app.post('/sports/create', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        const { name, maxAmount} = req.body
        if (!name) return res.send("Nome do esporte não inserido!");
        if(await prisma.sport.findFirst({ where: { name: { equals: name } } })) return res.send("Um esporte com esse nome já existe!");
        console.log()
        const sports = await prisma.sport.create({
            data: {
                name: name,
                maxAmount: `${maxAmount}`
            },
        })
        res.json(sports);
    })
    
    app.post('/sports/update', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        const { id, name, maxAmount } = req.body;
        const sports = await prisma.sport.update({
            where: {
                id: id
            },
            data: {
                name: name,
                maxAmount: `${maxAmount}`
            },
        })
        res.json(sports);
    })
    
    app.post('/sports/delete', (req, res, next) => auth(req, res, next, 'ADMIN'), async (req, res) => {
        const { id } = req.body;
        await prisma.courtHasSports.deleteMany({where:{sportsId: {equals: id}}});
        const sports = await prisma.sport.delete({
            where: {
                id: id
            },
        })
        res.json(sports);
    })
}