function validarEnvio(){
    event.preventDefault (); 

    if (numero.value.length !== 19){
        /* numero.style.border = '1px solid red'; */
        numero.classList.add('is-invalid');
    } 
    if (titular.value === ''){
        /* titular.style.border = '1px solid red' */
        titular.classList.add('is-invalid');
    }
    if(mes.value === ''){
        /* mes.style.border ='1px solid red' */
        mes.classList.add('is-invalid');
    }
    if(ano.value === ''){
        /* ano.style.border = '1px solid red' */
        ano.classList.add('is-invalid');
    }
    if(cvv.value.length !== 3){
       /*  cvv.style.border = '1px solid red' */
        cvv.classList.add('is-invalid');
    }
    if (cpf.value === ''){
        /* cpf.style.border ='1px solid red' */
        cpf.classList.add('is-invalid');
    }
}


function alterarNumero(){
    numero.classList.remove('is-invalid');

    if(numero.value.length === 19){
        numero.classList.add('is-valid');
    }

    //pega os valores digitados no input (numero.value) e leva até a div do cartão (card_numero)
    card_numero.innerHTML = numero.value;

    if (numero.value.substr(0, 1) === "4") {
        card_bandeira.innerHTML = '<img src="img/visa.png" width="40px">';

    } else if (numero.value.substr(0, 1) === "5") {
        card_bandeira.innerHTML = '<img src="img/master.png" width="40px">';
    }
}

function alterarTitular(){
    titular.classList.remove('is-invalid');

    if(titular.value.length === 19){
        titular.classList.add('is-valid');
    }

    card_titular.innerHTML = titular.value;
}

function alterarMes(){
    mes.classList.remove('is-invalid');

    card_validade.innerHTML = mes.value + "/" + ano.value; 
}

function alterarAno(){
    ano.classList.remove('is-invalid');

    card_validade.innerHTML = mes.value + "/" + ano.value; 
}

function alterarCvv(){
    cvv.classList.remove('is-invalid');

    let ultimoDigito = cvv.value.substr(-1); // pega a ultima letra/numero
    
    if(isNaN(ultimoDigito)){
        let quantidade = cvv.value.length;
        let resultado = cvv.value.substr(0, quantidade -1);

        cvv.value = resultado;
    }

    if(cvv.value.length === 3){
        cvv.classList.add('is-valid');
    }

    card_cvv.innerHTML = cvv.value;

}

function alterarCpf(){
    cpf.classList.remove('is-invalid');

    let ultimoDigito = cpf.value.substr(-1)


    
    if(cpf.value.length === 11){
        cpf.classList.add('is-valid');
    }
}