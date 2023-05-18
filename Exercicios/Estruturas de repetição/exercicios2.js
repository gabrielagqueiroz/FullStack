/* 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor 
que C. */

let a = Number(prompt("Digite o valor de A:"));
let b = Number(prompt("Digite o valor de B:"));
let c = Number(prompt("Digite o valor de C:"));


if ((a + b) < c) {
    document.write(`A soma de ${a} mais ${b} é menor que ${c}`);
    console.log(`A soma de ${a} mais ${b} é menor que ${c}`);
} else {
    document.write(`A soma de ${a} mais ${b} não é menor que ${c}`);
    console.log(`A soma de ${a} mais ${b} não é menor que ${c}`);
}


/* 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e 
estado civil seja “CASADA”, solicitar o tempo de casada (anos).  */

let nome = prompt("Digite o seu nome:");
let sexo = prompt("Digite o seu sexo (F)Feminino ou (M)Masculio:");
let estadoCivil = prompt("Digite o seu estado civil:");


if (sexo == "F" && estadoCivil == "CASADA") {
    let tempoCasada = Number(prompt('Digite quantos anos de casamento:'));
    document.write(`${nome} do sexo ${sexo} estado civil ${estadoCivil} tem ${tempoCasada} anos de casamento.`);
    console.log(`${nome} do sexo ${sexo} estado civil ${estadoCivil} tem ${tempoCasada} anos de casamento.`);
} else {
    document.write(`${nome} do sexo ${sexo}, estado civil ${estadoCivil}.`);
    console.log(`${nome} do sexo ${sexo}, estado civil ${estadoCivil}.`);
}



/* 3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar */

let number = prompt("Digite um numero:");

if (number % 2 == 0) {
    document.write(`O numero ${number} é par.`);
    console.log(`O numero ${number} é par.`);
} else {
    document.write(`O numero ${number} é impar.`);
    console.log(`O numero ${number} é impar.`);
}


/* 4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se 
somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se 
atribuir o resultado para uma variável C e mostrar seu conteúdo na tela. */

var number1 = Number(prompt("Digite o primeiro numero:"));
var number2 = Number(prompt("Digite o segundo numero:"));
var result;

if (number1 == number2) {
    result = number1 + number2;
    document.write(`A soma do numero ${number1} mais o numero ${number2} é ${result}.`);
    console.log(`A soma do numero ${number1} mais o numero ${number2} é ${result}.`);
} else if (number1 !== number2 ) {
    result = number1 * number2;
    document.write(`A multiplicação do numero ${number1} vezes o numero ${number2} é ${result}.`);
    console.log(`A multiplicação do numero ${number1} vezes o numero ${number2} é ${result}.`);
}


/* 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, 
imprimindo o resultado. */

var number = Number(prompt("Digite um numero:"))
var result;

if(number > 0) {
    result = number * 2;
    document.write(`O dobro do numero ${number} é ${result}.`);
    console.log(`O dobro do numero ${number} é ${result}.`);
} else {
    result = number * 3;
    document.write(`O triplo do numero ${number } é ${result}.`);
    console.log(`O triplo do numero ${number } é ${result}.`);
}




/* 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são 
VERDADEIROS ou FALSOS. */





/* 7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, 
imprimir o resultado desta operação. */

let number = Number(prompt("Digite um numero:"))
let soma; 

if (number % 2 == 0) {
    soma = number + 5;

    document.write(`O resultado de ${number} mais 5 é ${soma}.`);

} else {
    soma = number + 8;

    document.write(`O resultado de ${number} mais 8 é ${soma}.`);
}


/* 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem 
decrescente.*/
 
let n1 = parseInt(prompt("Digite o primeiro numero:"));
let n2 = parseInt(prompt("Digite o segundo numero:"));
let n3 = parseInt(prompt("Digite o terceiro numero:"));

if(n1 != n2 && n1 != n3 && n2 != n3) {
    let soma = [n1, n2, n3];

    soma.sort(function(a, b){

        if(a > b) return -1;
        if(a < b) return 1;

        return 0;
    });

    console.log(soma); 
    document.write(soma);

} else {
    alert("Os numeros não podem ser repetidos. Digite valores diferentes!")
}


/* 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que 
calcule seu peso ideal, utilizando as seguintes fórmulas: 
● para homens: (72.7 * h) – 58; 
● para mulheres: (62.1 * h) – 44.7. */ 

let h = parseFloat(prompt("Digite sua altura:"));
let s = prompt("Digite seu sexo (F / M):");

console.log(h);

if (s == "F") {
    pesoIdeal = ((62.1 * h) - 44.7).toFixed(1);
    
    console.log(`Seu peso ideal é de ${pesoIdeal} Kg.`);
    document.write(`Seu peso ideal é de ${pesoIdeal} Kg.`);

} else if (s == "M") {
    pesoIdeal = ((72.7 * h) - 58).toFixed(1);

    console.log(`Seu peso ideal é de ${pesoIdeal} Kg.`);
    document.write(`Seu peso ideal é de ${pesoIdeal} Kg.`);

} else {
    alert("Digite F para feminino ou M para masculino.");
}


/* 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar 
umaindicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )2
 
Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo 
com a tabela abaixo. 

IMC em adultos Condição 
Abaixo de 18,5 Abaixo do peso 
Entre 18,5 e 25 Peso normal 
Entre 25 e 30 Acima do peso 
Acima de 30 obeso 
 */

let peso = parseFloat(prompt("Digite seu peso:"));
let altura = parseFloat(prompt("Digite seu altura:"));

let imc = (peso / (altura * altura)).toFixed(1);
let classe;

if (imc < 18.5) {
    classe = 'Você está abaixo do peso.'

} else if (imc >= 18.5 || imc <= 25) {
    classe = 'Você está com o peso normal.'

} else if (imc > 25 || imc <= 30) {
    classe = 'Você está acima do peso.'

} else {
    classe = 'Você está obeso.'
}

document.write(`${classe} Seu IMC é ${imc}.`)



/* 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço 
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir 
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. 
Código Condição de pagamento 
1 À vista em dinheiro ou cheque, recebe 10% de desconto 
2 À vista no cartão de crédito, recebe 15% de desconto 
3 Em duas vezes, preço normal de etiqueta sem juros 
4 Em duas vezes, preço normal de etiqueta mais juros de 10% */

let result;
let soma ;
let preco = parseFloat(prompt("Digite o valor do produto:"));

let pagamento = prompt("Escolha a condição de pagamento:");

if (pagamento == 'dinheiro' || pagamento == 'cheque') {
    soma = (preco * 0,10)
    result = preco - soma

    document.write(`O valor a ser pago é ${result}.`)

} else if (pagamento == 'a vista Cartao') {
    soma = (preco * 0,15)
    result = preco - soma
    
    document.write(`O valor a ser pago é ${result}.`)


} else if (pagamento == '2x Sem Juros') {
    soma = (preco / 2)
    result = soma

    document.write(`O valor a ser pago é ${result}.`)


} else if (pagamento == '2x Com Juros') {
    soma = (preco * 0,10 )
    result = (preco /2 ) + (soma / 2)
    
    document.write(`O valor a ser pago é 2x de ${result}.`)


} else {
    preco;
}



/* 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 
3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de 
aproveitamento, usando a fórmula: 
MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7 
A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, 
suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a 
mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E. 
Média de aproveitamento Conceito 
>= 90 A 
>= 75 e < 90 B 
>= 60 e < 75 C 
>= 40 e < 60 D 
< 40 E */

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let ME = parseFloat(prompt("Digite a ME:"));

let soma1 = (nota1 + nota2);
let soma2 = ((soma1 * 2) + nota3);
let soma3 = ((soma2 * 3) + ME);
let MA = (soma3 / 7).toFixed(2);

console.log(soma1)
console.log(soma2)
console.log(soma3)
console.log(MA)

if(MA >= 90) {
    document.write('Aprovado nota A');

} else if (MA >= 75) {
    document.write('Aprovado nota B');

} else if (MA >= 60) {
    document.write('Aprovado nota C');

} else if (MA >= 40) {
    document.write('Reprovado nota D');

} else {
    document.write('Reprovado nota E');
}

