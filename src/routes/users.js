const { PrismaClient } = require("../../prisma/@generated");
const prisma = new PrismaClient();
const auth = require("../middlewares/auth");
const bcrypt = require("bcrypt");

module.exports = (app) => {
  app.get(
    "/users",
    (req, res, next) => auth(req, res, next, "ADMIN"),
    async (req, res) => {
      const users = await prisma.user.findMany({
        where: {
          name: {
            not: undefined,
          },
        },
      });
      res.json(users);
    }
  );

  app.post("/users", async (req, res) => {
    const { password, campi, email, name, ra } = req.body;
    if (!password) return res.send("Senha não inserida!");
    if (!campi) return res.send("Campi não inserido!");
    if (!email) return res.send("Email não inserido!");
    if (!name) return res.send("Nome não inserido!");
    if (!ra) return res.send("RA não inserido!");
    if (!password) return res.send("Senha não inserida!");
    if (password.length <= 7)
      return res.send("A senha deve possuir pelomenos 7 caracteres!");
    if(await prisma.user.findFirst({ where: { ra: { equals: ra } } })) return res.send("Uma conta com esse RA já existe!");

    bcrypt.hash(password, 2, async function (err, hash) {
      const user = await prisma.user.create({
        data: {
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
        },
      });
      res.json(user);
    });
  });
};
