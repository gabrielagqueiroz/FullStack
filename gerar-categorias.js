const database = require('./conexao');
const {faker} = require('@faker-js/faker/locale/pt_BR');

for (let i = 1; i <= 100; i++){
    database.executar(`
        INSERT INTO tb_categoria (nome) VALUES ('${faker.commerce.department()}');
    `);
}