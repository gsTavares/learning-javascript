// Funções

/**
 * Tipos de função
 * 
 * -> Declarativa
 * -> de Expressão
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
function sumTwoNumbers(n1, n2){
    let sum = n1 + n2;
    return {result : sum};
}

console.log(sumTwoNumbers(3, 6));

function sumArray(arr){
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

function printParams(){
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

unlimited(1,2,3,4,5);
    


