const http = require('http');

/* const {listarTodos, filtrar, destaques, detalhes} = require('./produto.js');
const {listarTodos, filtrar, destaques, detalhes} = require('./categoria.js'); */

const produto = require('./produto');
const categoria = require('./categoria');


const PORTA = 8000;

function recepcao(req, res){
    if (req.url === './produto'){
        res.end(produto.listarTodos())

    } else if (req.url === './categoria'){
        res.end(categoria.listarTodos())
        
    }else {
        res.end('Pagina não encontrada');
    }
}

http.createServer(recepcao).listen(PORTA);
