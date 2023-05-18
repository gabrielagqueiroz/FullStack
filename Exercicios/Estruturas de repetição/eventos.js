/* 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a 
média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores 
negativos e o percentual de valores negativos e positivos.*/

let valores = [];
let valorPositivo = 0;
let valorNegativo = 0;

while(true){
    let number = Number(prompt("Digite um numero:"));
    valores.push(number);

    if(number === 0) {
        break;
    }   

    if(number > 0) {
        valorPositivo++;

    } else {
        valorNegativo++;
    }
}

let soma = valores.reduce((soma, i) => {
    return soma + i;
})

let media = soma / (valores.length -1); 
let percPositivo = (valorPositivo/valores.length)*100;
let percNegativo = (valorNegativo/valores.length)*100;

console.log(valores)
console.log(soma)
console.log(valorPositivo)
console.log(valorNegativo)
console.log(media)
console.log(percPositivo)
console.log(percNegativo)

/* let soma = 0;
let qtd_positivos = 0;
let qtd_negativos = 0;

while (true) {
  let valor = parseFloat(prompt("Digite um valor (ou '0' para sair):"));

  if (valor === 0) {
    break;
  }

  soma += valor;

  if (valor > 0) {
    qtd_positivos++;
  } else {
    qtd_negativos++;
  }
}

const total = qtd_positivos + qtd_negativos;
const media = soma / total;
const perc_positivos = (qtd_positivos / total) * 100;
const perc_negativos = (qtd_negativos / total) * 100;

console.log(soma)
console.log(total)
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Qtd. de valores positivos: ${qtd_positivos}`);
console.log(`Qtd. de valores negativos: ${qtd_negativos}`);
console.log(`% de valores positivos: ${perc_positivos.toFixed(2)}%`);
console.log(`% de valores negativos: ${perc_negativos.toFixed(2)}%`); */