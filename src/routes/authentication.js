const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { PrismaClient } = require('../../prisma/@generated');
const prisma = new PrismaClient()
module.exports = app => {

    app.post('/login', async (req, res, next) => {
        console.log(req.body)
        const { ra, password } = req.body;
        if (!ra) {
            return res.status(500).send('RA invalido!')
        };
        if (!password) return res.status(500).send('Senha invalida!');

        const user = await prisma.user.findFirst({
            where: {
                ra: ra,
            },
            select: {
                id: true,
                role: true,
                password: true,
            }
        })

        if (!user) return res.send("Usuario não encontrado");
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                return res.send(jsonwebtoken.sign({ id: user.id, ra: ra, role: user.role }, process.env.JWT_SECRET_TOKEN, { expiresIn: process.env.JWT_EXPIRATION_TIME }));
            }
            else {
                if (!password) return res.status(500).send('Senha invalida!');
            }
        });
    })
}