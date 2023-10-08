const mysql = require('mysql2/promise')

const connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'260104',
    database:'muralis'
})

module.exports = connection
