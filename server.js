const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require("body-parser");

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany({
    where: { Name: {
      not: undefined
    }},
  })
  res.json(users)
})

app.post('/users', async (req, res) => {
  console.log(req);

  // const users = await prisma.users.create({
  //   data:{
  //     Campi: req.body,

  //   },
  //   select: {
  //     Name
  //   }
  // })
  // res.json(users)
})


const server = app.listen(3000)