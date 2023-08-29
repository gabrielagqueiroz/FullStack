let bebidas = [
    {
        id: 1,
        nome: 'Coca Cola',
        descricao: 'KS 390ml',
        quantidade: 12,
       foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 2,
        nome: 'São Geraldo',
        descricao: 'garrafa 1 litro',
        quantidade: 10,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 3,
        nome: 'Guaraná Jesus',
        descricao: 'garrafa 2 litros',
        quantidade: 12,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 4,
        nome: 'Fanta Uva',
        descricao: 'Lata 350ml',
        quantidade: 12,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 5,
        nome: 'Schweppes',
        descricao: 'Lata 350ml',
        quantidade: 10,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 6,
        nome: 'Sprit',
        descricao: 'garrafa 1 litro',
        quantidade: 12,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 7,
        nome: 'Fanta Laranja',
        descricao: 'garrafa 1 litro',
        quantidade: 10,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 8,
        nome: 'Suco Uva Integral',
        descricao: 'garrafa 2 litros',
        quantidade: 10,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 9,
        nome: 'Grapette',
        descricao: 'garrafa 1 litro',
        quantidade: 12,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
    {
        id: 10,
        nome: 'Soda Pink Lemonade',
        descricao: 'Lata 350ml',
        quantidade: 12,
        foto:'https://www.saborama.com.br/wp-content/uploads/2017/10/grapette-saborama-repete1-109x300.png'
    },
]

function abrirModal(foto, nome) {
    modalFotoConteudo.innerHTML = `<img src="${foto}">`;
    modalTitulo.innerHTML = nome;
}

function atualizarTabela(lista){
    lista.map((cada) => {
        document.getElementById('tabela-dados').innerHTML += `
            <tr>
                <td>${cada.id}</td>
                <td>${cada.nome}</td>
                <td>${cada.descricao}</td>
                <td>${cada.quantidade}</td>
                <td>
                <a onclick="abrirModal('${cada.foto}', '${cada.nome}')" href="#" data-bs-toggle="modal" data-bs-target="#modalFoto">
                <img src="${cada.foto}" width="50px">
                </a>
                </td>
                <td>
                    <button class="btn btn-outline-warning btn-sm">Editar</button>
                    <button class="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    })
}

atualizarTabela(bebidas);

