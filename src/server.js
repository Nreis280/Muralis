const app = require('./app')

require('dotenv').config();
const porta = process.env.PORT

app.listen(porta)