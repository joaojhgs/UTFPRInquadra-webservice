
const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient()
const auth = require('../middlewares/auth')
const bcrypt = require('bcrypt');


module.exports = app => {

    app.get('/users', auth, async (req, res) => {
        const users = await prisma.user.findMany({
          where: { name: {
            not: undefined
          }},
        })
        res.json(users)
      })
      
      app.post('/users', async (req, res) => {
        const {password, campi, email, name, ra} = req.body;
        if(!password) return app.send("Senha não inserida!")
        if(!campi) return app.send("Campi não inserido!")
        if(!email) return app.send("Email não inserido!")
        if(!name) return app.send("Nome não inserido!")
        if(!ra) return app.send("RA não inserido!")
        if(!password) return app.send("Senha não inserida!")

        bcrypt.hash(password, 2, async function(err, hash) {
          bcrypt.compare(password, hash, function(err, result) {  // Compare
            // if passwords match
            if (result) {
                  console.log("It matches!")
            }
            // if passwords do not match
            else {
                  console.log("Invalid password!");
            }
          });
          const user = await prisma.user.create({
            data:{
              campi: campi,
              email: email,
              name: name,
              ra: ra,
              password: hash,
            },
            select: {
                id: true,
                ra: true,
                name: true,
                campi: true,
                email: true,
            }
          })
          res.json(user);
        });
      })
}