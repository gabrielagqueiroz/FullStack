function filtrar(){
    const tabela = document.getElementById('tabela-dados');

    tabela.innerHTML = '';

    let palavra = busca.value.toLowerCase();

    let resultado = bebidas.filter (function (cada) {
        let nomeBebida = cada.nome.toLowerCase();
        let descricao = cada.descricao.toLowerCase();
            return nomeBebida.includes(palavra) || descricao.includes(palavra)

    })

    atualizarTabela(resultado);
}

