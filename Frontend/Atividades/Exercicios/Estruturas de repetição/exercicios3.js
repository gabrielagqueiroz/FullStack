//1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
//três e que se encontram no conjunto dos números de 1 até 500.

let soma = 0;

for (let number = 1; number <= 500; number++) { // para ir de 1 a 500 
    if (number % 2 !== 0 && number % 3 === 0) { // se o resultado da divisão por 2 for diferente de 0 e o numero for multiplo de 3
        soma = soma + number; // soma recebe number
     };
};

console.log(soma)


/* 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e 
mostrar : 
a. A menor altura do grupo; 
b. A maior altura do grupo; */

var alturas = []; //array para armazenar as alturas 
//var altura;

for (let number = 1; number <= 15; number++) {  //laço para rodar o prompt
    var altura = prompt("Digite uma altura: " + number)  // receber os valores digitados 
    
    alturas.push(altura) //inclui os valores dentro do array
    
    console.log(alturas) //mostra valores no array
};

var max = Math.max(...alturas); //mostra o maior valor dentro de um array

var min = Math.min(...alturas); //mostra o menor valor dentro de um array

document.write(`As alturas são: ${alturas} A maior altura do grupo é: ${max} e a menor altura do grupo 
é: ${min}.`)



//6) Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.

for (number = 100; number <= 200; number++) {
    if (number % 2 == 1) {

       console.log(number)

       document.write(`${number} </br>`)
    }
};