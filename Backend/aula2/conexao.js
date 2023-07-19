//importa a biblioteca mysql2, ponte entre o node e banco de dados
const mysql = require('mysql2/promise'); 

 async function execultar(query) {
    const con = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'db_escola',
        port: '3306' // SHOW GLOBAL VARIABLES LIKE 'PORT';
    });

    const [results] = await con.query(query);

    return results;
}

module.exports = {
    execultar
};