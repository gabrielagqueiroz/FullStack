let bebidas = [
    {
        id: 1,
        nome: 'Coca Cola',
        descricao: 'KS 390ml',
        quantidade: 12,
        foto:''
    },
    {
        id: 2,
        nome: 'São Geraldo',
        descricao: 'garrafa 1 litro',
        quantidade: 10,
        foto:''
    },
    {
        id: 3,
        nome: 'Guaraná Jesus',
        descricao: 'garrafa 2 litros',
        quantidade: 12,
        foto:''
    },
    {
        id: 4,
        nome: 'Fanta Uva',
        descricao: 'Lata 350ml',
        quantidade: 12,
        foto:''
    },
    {
        id: 5,
        nome: 'Schweppes',
        descricao: 'Lata 350ml',
        quantidade: 10,
        foto:''
    },
    {
        id: 6,
        nome: 'Sprit',
        descricao: 'garrafa 1 litro',
        quantidade: 12,
        foto:''
    },
    {
        id: 7,
        nome: 'Fanta Laranja',
        descricao: 'garrafa 1 litro',
        quantidade: 10,
        foto:''
    },
    {
        id: 8,
        nome: 'Suco Uva Integral',
        descricao: 'garrafa 2 litros',
        quantidade: 10,
        foto:''
    },
    {
        id: 9,
        nome: 'Grapette',
        descricao: 'garrafa 1 litro',
        quantidade: 12,
        foto:''
    },
    {
        id: 10,
        nome: 'Soda Pink Lemonade',
        descricao: 'Lata 350ml',
        quantidade: 12,
        foto:''
    },
]

bebidas.map((cada) => {
    document.getElementById('tabela-dados').innerHTML += `
        <tr>
            <td>${cada.id}</td>
            <td>${cada.nome}</td>
            <td>${cada.descricao}</td>
            <td>${cada.quantidade}</td>
            <td>${cada.foto}</td>
            <td>
                <button class="btn btn-outline-warning btn-sm">Editar</button>
                <button class="btn btn-outline-danger btn-sm">Excluir</button>
            </td>
        </tr>
    `;
})