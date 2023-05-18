async function addBebida() {
    event.preventDefault();
    
    await fetch('http://localhost:8000/bebidas', {
        method: 'POST', //cadastar
        headers: {     // informa o tipo de dados no caso em json
            "Content-Type": "application/json"
        },
        body: JSON.stringify({    // transforma em JSON.
            nome: input_nome.value,                 // valores digitados no input.
            descricao: input_descricao.value,       // valores digitados no input.
            quantidade: input_quantidade.value,     // valores digitados no input.
            foto: input_foto.value                  // valores digitados no input.
        })
    })

    alert('Bebida cadastrada!')

    //limpar os campos do formulario
    form_cadastro.reset();

    //vai simular que o usuario ta clicando no x pra fechar o form
    //ou seja, dispara o evento de click
    fechar_cadastro.dispatchEvent(new Event('click'));

    //atualiza a tabela do HTML
    buscarBebidas();
}


function abrirModal(foto, nome) {
    modalFotoConteudo.innerHTML = `<img src="${foto}">`;
    modalTitulo.innerHTML = nome;
}


function atualizarTabela(lista){
    document.getElementById('tabela-dados').innerHTML = '';

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
                    <button onclick="editarBebida(${cada.id})" class="btn btn-outline-warning btn-sm">Editar</button>
                    <button onclick="excluirBebida(${cada.id})" class="btn btn-outline-danger btn-sm">Excluir</button>
                </td>
            </tr>
        `;
    })
}

//atualizarTabela(bebidas);
function buscarBebidas() {
 fetch('http://localhost:8000/bebidas')
    .then(res => res.json())
    .then(dados => atualizarTabela(dados)); 
}


async function excluirBebida(id) { //(async-await) força a espera da finalização do comando para que o proximo seja execultado.
    alert('Bebida excluida!');
    
    await fetch('http://localhost:8000/bebidas/'+id, {
        method: 'DELETE'
    });

    location.href = "index.html"; // atualiza a pagina

    buscarBebidas();  // sera execultado depois do async-await.
}


buscarBebidas();



function editarBebida(id) {
    alert('ok')
}




/* let bebidas = [
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
 */