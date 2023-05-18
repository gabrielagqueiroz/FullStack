function enviar () {
    event.preventDefault(); // não atualiza a pagina, impede o comportamento padrão

    
    contatos.push({
        id: 6,
        nome: nome.value, //id nome input
        telefone: telefone.value // id telefone input
    });

    alert('pronto!');
}

function cadastro () {
    document.title = "Novo Contato"

    conteudo.innerHTML = `
    <form onsubmit="enviar()">
    <label>Nome</label>
    <input id="nome" class="form-control mb-3" placeholder="Nome">

    <label>Telefone</label>
    <input id="telefone" class="form-control mb-3" placeholder="Telefone">

    <button class="btn btn-primary">Enviar</button>
    </form>
    
    `;

}