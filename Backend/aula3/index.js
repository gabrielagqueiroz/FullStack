/* const http = require('http');
const database = require('./conexao');

 async function recepcao(req, res) {
    if (req.url === '/alunos') {
        let dados = await database.execultar('SELECT * FROM tb_aluno');

        res.end(
            JSON.stringify(dados)
        );
        return;
    }

    if(req.url === '/alunos/5') {
        let  dados = await database.execultar('SELECT * FROM tb_aluno WHERE id=5');

        res.end(
            JSON.stringify(dados)
        );
        return;
    } 

    res.end('Ola mundo');
}

http.createServer(recepcao).listen(8000); */

const express = require('express');
const database = require('./conexao');
const curso = require('./src/Cursos/routes.js')

const app = express();
app.use(express.json()); // API vai trabalhar com JSON

app.use(curso);

app.get('/', (req, res) => {
    res.end('Ola mundo');
});


app.get('/alunos', async (req, res) => {
    let dados = await database.execultar('SELECT * FROM tb_aluno');

   /*  res.json(dados) */

    res.end(
        JSON.stringify(dados)
    );
});

app.get('/alunos/:id', async (req, res) => {
    let id = req.params.id;

    let dados = await database.execultar(
        `SELECT * FROM tb_aluno WHERE id=${id}` // ${req.params.id}
    );

    res.json(dados);
});


app.post('/alunos', async (req,res) => {
    let {nome, data_nascimento, cpf} = req.body

    /* let nome  = req.body.nome;
    let data_nascimento = req.body.data_nascimento;
    let cpf = req.body.cpf; */

    await database.execultar(
        `INSERT INTO tb_aluno (nome, data_nascimento, cpf)
        VALUES ('${nome}', '${data_nascimento}', '${cpf}')`

        /* VALUES ('${req.body.nome}', '${req.body.data_nascimento}', '${req.body.cpf}') */
    )

    res.end('deu rock');
})


app.listen(8000, () => {
    console.log('API rodando')
});