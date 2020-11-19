const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'philipe',
    password: 64919598,
    database: 'denotefriends'
})

connection.connect((err) => {
    if(err) throw err
    console.log('Conexão Criada')
})