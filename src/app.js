const express = require('express');
const router = require('../src/Routes/router')

const app = express()
app.use(router)


module.exports = app
