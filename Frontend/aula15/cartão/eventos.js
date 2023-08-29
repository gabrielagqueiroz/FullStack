let meses = {
    '01' : 'Janeiro',
    '02' : 'Fevereiro',
    '03' : 'Março',
    '04' : 'Abril',
    '05' : 'Maio',
    '06' : 'Junho',
    '07' : 'Julho',
    '08' : 'Agosto',
    '09' : 'Setembro',
    '10' : 'Outubro',
    '11' : 'Novembro',
    '12' : 'Dezembro'
};

/*  for(let x in mes) {
    document.getElementById('mes').innerHTML += `<option>${mes[x]}</option>`;
} */

for (let i = 1; i <= 9; i++) {
    mes.innerHTML += `<option value="0${i}" >${meses["0"+i]}</option>`;
}

for (let i = 10; i <= 12; i++) {
    mes.innerHTML += `<option value="${i}">${meses[i]}</option>`;
}

for(let a = 2023; a <= 2030; a++){
    let value = a.toString().substr(2, 2);

    ano.innerHTML += `<option value="${value}">${a}</option>`;
}// vai pegar o codigo em html do "ano"
 // += vai manter o que tem e adiconar mais 1 
 // option value="${value}" tem prioridade como valor, caso não tenha o nome será o valor usado.
