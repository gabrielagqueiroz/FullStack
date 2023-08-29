const database = require('./conexao');
const {faker} = require('@faker-js/faker');

for (let i = 1; i <= 100; i++){
    database.executar(`
        INSERT INTO tb_categoria (nome) VALUES ('Categoria teste ${i}');
    `);
}