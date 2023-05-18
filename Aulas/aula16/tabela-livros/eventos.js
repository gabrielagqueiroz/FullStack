let livros = [
    {
        id: 01,
        nome: 'A verdade sobre os Anjos',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 02,
        nome: 'A historia da rendenção',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 03,
        nome: 'Patriarcas e Profetas',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 04,
        nome: 'Espirito de Prefecia',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 05,
        nome: 'O Desejado de Todas as Nações',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 06,
        nome: 'O Grande Conflito',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 07,
        nome: 'Eventos Finais',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 08,
        nome: 'Visões do Céu',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 09,
        nome: 'Mente, Caráter e Personalidade',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
    {
        id: 10,
        nome: 'Primeiros Escritos',
        autor: 'Ellen White',
        genero: 'Religioso',
        foto: '',
        valor: 'R$ 50,00'
    },
]


livros.map((cada) => {
    document.getElementById('dados-tabela').innerHTML += `
        <tr>
        <td>${cada.id}</td>
        <td>${cada.nome}</td>
        <td>${cada.autor}</td>
        <td>${cada.genero}</td>
        <td>${cada.foto}</td>
        <td>${cada.valor}</td>

        <td> 
                <button class="btn btn-outline-warning btn-sm">Editar</button>
                <button class="btn btn-outline-danger btn-sm">Excluir</button>
        </td>
        <tr/>
    `;
})