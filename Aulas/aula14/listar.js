let contatos = [
    {
        id: 1,
        nome:'Albert',
        telefone: '85 9 8612-1234',
    },
    {
        id: 2,
        nome: 'Junior',
        telefone: '85 9 8876-3456',
    },
    {
        id: 3,
        nome: 'João',
        telefone: '85 9 8876-3456',
    },
    {
        id: 4,
        nome: 'Marcos',
        telefone: '85 9 8876-3456',
    }
];

/* function mostrarNome(x) {
    alert(x.nome);
}
 */

function mostrarNome(cadaContato) {
    return `
    <tr>
        <td>${cadaContato.nome}</td>
        <td>${cadaContato.telefone}</td>
    </tr>
    `
}

/* contatos.forEach(mostrarNome); //forEache percorre */

function listar () {

    conteudo.innerHTML = `
    <table class="table table-striped table-hover">
    <thead class="table-dark">
        <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>${contatos.map(mostrarNome).join('')}</tbody>
</table>
`;

}