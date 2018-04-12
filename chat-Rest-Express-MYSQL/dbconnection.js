var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'musclr_chat'
});
module.exports = connection;