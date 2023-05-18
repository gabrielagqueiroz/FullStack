function buscar() {
    if(cep.value.length !== 8) {
        cep.classList.add('is-invalid');
        return; 
    }

    cep.classList.remove('is-invalid');

    fetch(`http://viacep.com.br/ws/${cep.value}/json`)
    .then(resposta => resposta.json())
    .then(conteudo => {

        logradouro.value = conteudo.logradouro; //nome no json
        numero.value = conteudo.numero;
        bairro.value = conteudo.bairro;
        cidade.value = conteudo.localidade;
        uf.value = conteudo.uf;
    })
    
}