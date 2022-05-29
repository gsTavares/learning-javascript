let arr = undefined;

// Arrays
// Criando um array vazio

// Com construtor
arr = Array();
console.log(arr);

// Com [] -> mais recomedado;
arr = [];
console.log(arr);

// Com valores inciais;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Numbers: ', arr);

// Arrays podem conter diferentes tipos de dados
arr = ['Gustavo', 19, { nome: 'gustavo', sobrenome: 'tavares' }];
console.log(arr);

// Criando um array utilizando a função split();

let js = 'JavaScritp';
const charsInJavascript = js.split('');
console.log(charsInJavascript);

let companiesString = 'Facebook, Google, Microsoft, \
Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(',');
console.log(companies);

let txt = 'I love teaching and empowering people. \
I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ');
console.log(words);

// Acessando items do array pelo index
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let firstFruit = fruits[0];
console.log(firstFruit);

let secondFruit = fruits[1];
console.log(secondFruit);

let lastFruit = fruits[3];
console.log(lastFruit);

// Calculando último index
let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log(lastFruit);

// Modificando um elemento do array

/**
 * Arrays são mutáveis. Portanto, podem ter ser conteúdo modificado ao longo do código
 */

let numbers = [1, 2, 3, 4, 5, 6];
numbers[0] = 10;
numbers[1] = 20;
console.log(numbers);

// Métodos de manipulação do array

// Array constructor -> Array();
arr = Array(); // Array vazio
console.log(arr);

arr = Array(8); // Array vazio de 8 posições
console.log(arr);

// fill(valor); -> Preenche o array de acordo com o valor informado;

const eightXvalues = Array(8).fill('X');
console.log(eightXvalues);

const eight0values = Array(8).fill(0);
console.log(eight0values);

// concat(segundoArray); -> concatena dois arrays
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

// array.lenght -> retorna o tamanho do array

numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

/** indexOf(elemento) -> verifica se o elemento existe no array. Se existir, a função 
 * retorna a posição do elemento. Se não, retorna -1
 */

arr = ['banana', 'orange', 'mango', 'lemon'];
let index = fruits.indexOf('banana');

if (index != -1) {
    console.log('This fruit does exist in the array');
} else {
    console.log("This fruit doesn't exist in the array");
}

index != 1 ? console.log('This fruit does exist in the array')
    : console.log("This fruit doesn't exist in the array");

// lastIndexOf(element); -> retorna a última posição conhecida do elemento no array

numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(2)); // 7
console.log(numbers.lastIndexOf(0)); // -1
console.log(numbers.lastIndexOf(1)); //  6
console.log(numbers.lastIndexOf(4)); //  3
console.log(numbers.lastIndexOf(6)); // -1

// includes(element); -> verifica se o elemento informado pertence a um array

numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(5)); // true
console.log(numbers.includes(0)); // false
console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false

// Array.isArrray(variable) -> verifica se o tipo de dado da variável é um array

numbers = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbers));

const hundred = 100;
console.log(Array.isArray(hundred));

// toString() -> converte um array em uma string

numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());

/**
 * join(separator) -> converte um array em uma string e adiciona um elemento comum 
 * separador para cada elemento do array (se o separador não for informado, o método 
 * funciona exatamente igual ao toString());
 */

numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()) // 1,2,3,4,5

let names = ['Gustavo', 'João', 'Ana'];

console.log(names.join());
console.log(names.join(''));
console.log(names.join(' '));
console.log(names.join(', '));
console.log(names.join(' # '));

/**
 * slice(initialIndex, finalIndex) -> corta o array a partir de uma
 * posição inicial(inclusiva) e uma posição final (exclusiva)
 */

numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice()); // Copia tudo
console.log(numbers.slice(0)); // Copia tudo
console.log(numbers.slice(0, numbers.length)); // Copia tudo
console.log(numbers.slice(2)); // [3, 4, 5]
console.log(numbers.slice(1, 4)); // [2, 3, 4]

/**
 * splice(nItemsToBeRemoved, nItemsToBePresented) -> remove n items 
 * a partir da posição inicial do array e apresenta o restante dele
 */

numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice()); // Remove tudo

numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(2)); // [3,4,5] -> remove os dois primeiros elementos

numbers = [1, 2, 3, 4, 5];
console.log(numbers.splice(2, 2)); // [3,4] -> remove os dois primeiros e apresenta 2 
// dos 3 elementos restantes

// push(element) -> adiciona um novo elemento no final do array
numbers = [1, 2, 3, 4, 5];
numbers.push(6)
console.log(numbers);

// pop() -> remove o último elemento do array
numbers = [1, 2, 3, 4, 5];
numbers.pop();
console.log(numbers);

// shift() -> remove o primeiro elemento do array
numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);

// unshift() -> adiciona um novo elemento no começo da lista
numbers = [1, 2, 3, 4, 5]
numbers.unshift(0)
console.log(numbers)

// reverse() -> apresenta o array na ordem inversa
numbers = [1, 2, 3, 4, 5]
numbers.reverse();
console.log(numbers);

// sort() -> reordena o array em ordem crescente;
let letters = ['a', 'c', 'x', 'f', 'u', 'l'];
letters.sort();
console.log(letters); // letters.sort();
console.log(letters.reverse()); // letters.sort().reverse() -> ordem decrescente;

// Arrays de arrays (what?)

let firstNums = [1,2,3];
let secondNums = [4,5,6];

const arrayOfArray = [
    firstNums,
    secondNums   
]

console.log(arrayOfArray); // [[1,2,3], [4,5,6]]
console.log(arrayOfArray[0]); // [1,2,3]
console.log(arrayOfArray[1]); // [4,5,6] 


