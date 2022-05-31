// Funções

/**
 * Tipos de função
 * 
 * -> Declarativa
 * -> Expression
 * -> Anônima
 * -> Arrow function
 * 
 */

// Função declarativa sem retorno
function square() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
}

square(); // Imprime 4 no console

// Retornando valores com 'return'
function printFullName() {
    let firstName = 'Gustavo';
    let lastName = 'Tavares';
    let space = ' ';
    let fullName = `${firstName}${space}${lastName}`;

    console.log(fullName);
}

printFullName();

// Função com parâmetro
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(5).toString().concat(' m²'));

// Função com dois parâmetros
function sumTwoNumbers(n1, n2) {
    let sum = n1 + n2;
    return { result: sum };
}

console.log(sumTwoNumbers(3, 6));

function sumArray(arr) {
    let sum = 0 || '';
    for (const number of arr) {
        sum += number;
    }

    return sum;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(sumArray(arr));

arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr));

// Função com número ilimitado de argumentos

function printParams() {
    let sum = 0;
    for (const element of arguments) {
        sum += element;
    }

    return sum;
}

console.log(printParams(1, 2, 3, 4, 5));

// Arrow function com infinitos argumentos
const unlimited = (...args) => {
    console.log(args);
}

unlimited(1, 2, 3, 4, 5);

// Função anônima
const anonymousFunction = function () {
    console.log('Sou uma função anônima e o meu valor está armazenado em anonymousFunction');
}

// Expression function (anônima com retorno)
const expressionSquare = function (n) {
    return n * n;
}

console.log(expressionSquare(2));

// Função auto-invocada

let squareNum = (function(n){
    return n * n;
})(10); // --> O argumento da função é passado aqui

console.log(squareNum); // 100

// Arrow function

/**
 * A arrow function é uma sintaxe alternativa para declarar funções
 * 
 * const variable = (args_here) => {
 *      // your function code here
 * }
 */

let arrowSquare = (n) => {
    return n * n;
}

console.log(arrowSquare(15)); // 225

// Com uma única linha, pode ser escrita assim
arrowSquare = (n) => n * n; // A palavra reservada 'return' é omissa nesse caso

const changeToUpperCase = (arr) => {
    const newArr = [];
    for (const element of arr) {
        newArr.push(element.toUpperCase());
    }

    return newArr;
}

console.log(changeToUpperCase(['gustavo'])); //  ['GUSTAVO']

// Funções com parâmetros predefinidos

function greetings(name = 'Gustavo') { // O parâmetro/argumento já possui um valor predefinido 
//para essa função, que pode ser sobrescrito

    let message = `${name}, welcome to 30 Days of Javascript!`;
    return message;
}

console.log(greetings());
console.log(greetings('Henrique')); // Sobrescrevendo o parâmetro-padrão


