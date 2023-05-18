//VALIDAR O FORMULARIO

function validarEnvio(){
    event.preventDefault ();

    if(numero.value.length !== 19) {
        numero.classList.add ('is-invalid');
    }
    if(titular.value === '') {
        titular.classList.add ('is-invalid');
    }
    if(cpf.value.length !== 11) {
        cpf.classList.add ('is-invalid');
    }
    if(mes.value === '') {
        mes.classList.add ('is-invalid');
    }
    if(ano.value === '') {
        ano.classList.add ('is-invalid');
    }
    if(cvv.value.length !== 3) {
        cvv.classList.add ('is-invalid');
    }
}

//ALTERAR O NUMERO NO CARTÃO

function alterarNumero () {
    numero.classList.remove ('is-invalid');

    if(numero.value.length == 19) {
        numero.classList.add ('is-valid');
    }

    card_numero.innerHTML = numero.value;
} 

function alterarTitular () {
    titular.classList.remove ('is-invalid');
    
    if(titular.value.length == 19) {
        titular.classList.add ('is-valid')
    }

    card_titular.innerHTML = titular.value;
}

function alterarCpf () {
    cpf.classList.remove ('is-invalid');

    let ultimoDigito = cpf.value.substr(-1)

    if(isNaN(ultimoDigito)) {
        let quantidade = cpf.value.length;
        let resultado = cpf.value.substr(0, quantidade -1);

        cpf.value = resultado;
    }

    if(cpf.value.length == 11) {
        cpf.classList.add ('is-valid');
    }

}

function alterarMes () {
    mes.classList.remove ('is-invalid');

    card_validade.innerHTML = mes.value + "/" + ano.value;
}

    function alterarAno () {
        ano.classList.remove ('is-invalid');

        card_validade.innerHtml = mes.value + "/" + ano.value;
    }