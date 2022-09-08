const express = require('express');
const consign = require('consign')

const app = express()
app.disable('x-powered-by')

consign({
  cwd: 'src',
  verbose: true,
  locale: 'pt-br'
}).include('./middlewares/global').then('./routes').into(app)

const server = app.listen(process.env.PORT || 3000)
