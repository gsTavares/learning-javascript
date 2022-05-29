// Condicionais

/**
 * Estruturas condicionais são utilizadas para a tomada de decisão em um algoritmo;
 * Dadas algumas condições montamos uma expressão que, se verdadeira, executa uma parte do código. 
 * Se a expressão for falsa, outra parte do código será executada;
 * 
 * São estruturas condicionais:
 * 
 * // if
 * if(condicao){
 * 
 * };
 * 
 * // if...else
 * if(condicao){
 * 
 * } else {
 * 
 * };
 * 
 * // if... else if... else
 * if(condicao){
 *  
 * } else if (condicao2) {
 * 
 * } else {
 * 
 * };
 * 
 * // switch...case
 * switch(value){
 *      case *possible_value* :
 *          // your code here;
 *          break;
 * 
 *      default:
 *          // your code here;
 *          break;
 * }
 * 
 * // Operador ternário
 * value ? true : false 
 */

// Condicional if
let num = 3;

if (num > 0) { // Se 'num' for maior do que 0
    // Faça
    console.log(`${num} é um número positivo.`);
}

let isRaining = true;

if (isRaining) {
    console.log('Lembrar de pegar um guarda chuva antes de sair.');
}

// Condicional if...else
num = 3;
if (num > 0) { // Se 'num' for maior do que 0
    // Faça
    console.log(`${num} é um número positivo.`);
} else { // 'num' não é maior do que 0. Então
    // Faça
    console.log(`${num} é um número negativo`);
}

num = -3;
if (num > 0) { // Se 'num' for maior do que 0
    // Faça
    console.log(`${num} é um número positivo.`);
} else { // 'num' não é maior do que 0. Então
    // Faça
    console.log(`${num} é um número negativo`);
}

isRaining = true
if (isRaining) {
    console.log('Você precisa de um guarda chuva.')
} else {
    console.log('Você não precisa de um guarda chuva.')
}

isRaining = false
if (isRaining) {
    console.log('Você precisa de um guarda chuva.')
} else {
    console.log('Você não precisa de um guarda chuva.')
}

// Condicional if...else if... else

let a = 0
if (a > 0) { // Se 'a' for maior do que 0
    // Faça
    console.log(`${a} é positivo`)
} else if (a < 0) { // 'a' não é maior que 0. Se 'a' for menor do que 0
    // Faça
    console.log(`${a} é negativo`)
} else if (a == 0) { // 'a' não é maior e nem menor do que 0. Se 'a' for igual a 0
    // Faça
    console.log(`${a} é zero`)
} else { // 'a' não é menor, nem maior, nem igual a 0. Então
    // Faça
    console.log(`${a} não é um número`)
}

// Condicional Switch

let question = prompt("How's the weather today?");
let weather = question.toLowerCase();

switch (weather) {
    case 'rainy':
        console.log('Você precisa de um guarda chuva');
        break;
    case 'cloudy':
        console.log('Pode fazer frio. Coloque uma blusa');
        break;
    case 'sunny':
        console.log('Pode sair de boa');
        break;
    default:
        console.log('Não precisa de blusa');
}

num = prompt('Enter a number');
switch (true) {
    case num > 0:
        console.log('O número é positivo');
        break;
    case num == 0:
        console.log('O número é igual a 0');
        break;
    case num < 0:
        console.log('O número é negativo');
        break;
    default:
        console.log('O valor digitado não é um número');
}

// Operador ternário

isRaining = true;

isRaining ? console.log('Você precisa de um guarda chuva.')
    : console.log('Não precisa de guarda chuva');

