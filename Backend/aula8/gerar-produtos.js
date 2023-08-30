const database = require('./conexao');
const {faker} = require('@faker-js/faker/locale/pt_BR');

/* function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}; */

let sql = 'INSERT INTO tb_produto (categoria_id, nome, valor) VALUES';

for (let i = 0; i < 10000; i++){
   let categoria_id = faker.number.int({min: 350, max: 371});
   let nome = faker.commerce.product();
   let valor = faker.commerce.price();

   sql += `('${categoria_id}', '${nome}', '${valor}'),`;
}

sql = sql.slice(0, -1);

database.executar(sql);

/* console.log(random(406, 427)); */


//DELETE FROM tb_categoria WHERE id > 10;  (guarda ultimo id)
//TRUNCATE TABLE tb_carinho;  (reseta para o 1)
//TRUNCATE TABLE tb_produto;
// SELECT MIN(id), MAX(id) FROM tb_categoria;
// SELECT COUNT(*) FROM tb_produto;