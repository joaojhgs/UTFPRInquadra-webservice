
const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient()
const auth = require('../middlewares/auth')

module.exports = app => {

    app.get('/users', auth, async (req, res) => {
        const users = await prisma.user.findMany({
          where: { Name: {
            not: undefined
          }},
        })
        res.json(users)
      })
      
      app.post('/users', async (req, res) => {
        console.log(typeof req.body);
      
        const users = await prisma.user.create({
          data:{
            Campi: req.body.Campi,
            Email: req.body.Email,
            Name: req.body.Name,
            RA: req.body.RA
          },
          select: {
              id: true,
              RA: true,
              Name: true,
              Campi: true,
              Email: true,
          }
        })
        res.json(users)
      })
}