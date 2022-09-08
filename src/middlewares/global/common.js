const cors = require('cors')
const express = require('express')

/** @param { import('express').Express} app */
module.exports = app => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
}