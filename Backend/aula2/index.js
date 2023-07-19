const http = require('http');
const db = require('./conexao');

async function recepcao(req, res) {  //função principal, tratar as requisições e respostas
    if(req.url === '/cursos') {

        //buscando os dados no banco 
        let cursos = await db.execultar('SELECT * FROM tb_curso');

        //transformando os dados em json
        let json = JSON.stringify(cursos);

        //finalizando a resposta
        res.end(json);
        
        return;
    }

   if(req.url === '/categorias') {
    res.end('Listar categoriasssss');
   } else if(req.url === '/produtos') {
    res.end('Listar produtos');
   } else {
    res.end('pagina não encontrada')
   }
}

http.createServer(recepcao).listen(8000);