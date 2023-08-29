const database = require('./conexao');
const {faker} = require('@faker-js/faker/locale/pt_BR');

let nomes = faker.helpers.uniqueArray(
    faker.commerce.department,
    22
);

/* for (let i = 1; i <= 100; i++){
    database.executar(`
        INSERT INTO tb_categoria (nome) VALUES ('${faker.commerce.department()}');
    `);
} */

nomes.forEach(cada => {
    database.executar(`
        INSERT INTO tb_categoria (nome) VALUES ('${cada}');
    `);
});