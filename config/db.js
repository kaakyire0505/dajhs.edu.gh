const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'bkhwqkolsyzoz1opvd9r-mysql.services.clever-cloud.com',
    user: 'ui2f1ej1cffiat9j',
    password: 'FiUkDxTTc5OlFprSYXnl',
    database: 'bkhwqkolsyzoz1opvd9r'
})

connection.connect((err) => {
    if (err) throw err
    console.log('Mysql Connected!')
})

module.exports = connection
