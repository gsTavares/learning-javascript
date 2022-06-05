/**
 * Tipos primitivos: números, strings, booleans, null, undefined, symbol
 * Tipos não-primitivos: Objetos e Arrays;
 * 
 * Tipos primitivos são IMUTÁVEIS (não podem ser modificados... somente redefinidos)
 * 
 * Ex.
 * 
 * let frase = 'JavaScript';
 * 
 * frase[0] = 'Y' // console dispara um erro;
 * frase = 'React'; // certo;
 * 
 */

// Todos os tipos primitivos são comparados pelo seu valor;

let n1 = 3;
let n2 = 3;

console.log(n1 == n2); // verdadeiro;

let js = 'JavaScript';
let py = 'Python';

console.log(js == py); // falso;

let ligado = true;
let desligado = false;

console.log(ligado == desligado); // falso;


/**
 * Já os tipos não-primitivos são MUTÁVEIS (podem ter seus valores modificados depois 
 * que foram criados)
 * 
 * Arrays -> funcionam como uma lista e armazenam um ou mais valores, que podem ser todos 
 * de mesmo tipo ou de tipos diferentes. Todo array é indexado, ou seja, cada elemento da lista 
 * possui um índice, sempre iniciando em 0.
 */

let nums = [1,2,3];

nums[0] = 10; // Modificando a primeira posição do Array; 

console.log(nums); // [10, 2, 3];

/**
 * Diferente dos tipos primitivos, Arrays e Objetos não podem ser comparados
 * por valor. Mesmo que dois arrays ou objetos possuam os mesmos valores, 
 * eles não são considerados iguais.
 */

let array1 = [1,2,3];
let array2 = [1,2,3];

console.log(array1 == array2); // falso;

let userOne = {
    name: 'Gustavo',
    role: 'JS devloper',
    country: 'Brazil'
}

let userTwo = {
    name: 'Gustavo',
    role: 'JS devloper',
    country: 'Brazil'
}

console.log(userOne == userTwo); // falso;

/**
 * Não podemos compará-los essa forma, pois todo Array e Objeto são váriveis de referência. 
 * Elas só serão iguais se seus endereçamentos de memória forem iguais;
 */

let nums2 = [1,2,3];
let numbers = nums;

console.log(nums == numbers); // verdadeiro;

let anotherUserOne = {
    name: 'Gustavo',
    role: 'JS Devloper',
    country: 'Brazil'
}

let anotherUserTwo = anotherUserOne;    

console.log(anotherUserOne == anotherUserTwo); // verdadeiro;

// Tipos numéricos (inteiros e decimais, positivos e negativos);

let age = 19;
const gravity = 9.81;
let mass = 55;
const PI = 3.14;

console.log(age, gravity, mass, PI);

// Math object
const piWithMath = Math.PI; 

console.log(piWithMath); // 3.141592653589793

console.log(Math.round(piWithMath)); // 3 -> aproxima para o valor mais próximo;
console.log(Math.round(9.81)); // 10
console.log(Math.floor(piWithMath)); // 3 -> arredonda para 'baixo';
console.log(Math.ceil(piWithMath)); // 4 -> arredonda para 'cima';
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5 -> retorna o valor mínimo;
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20 -> retorna o valor máximo;

const randomNum = Math.random(); // cria um número aleatório de 0 a 0.99999;

// Numero aleatorio entre 0 e 10;
const generatedNum = Math.floor(Math.random() * 11)
console.log(generatedNum);

console.log(Math.abs(-10)); // 10 -> valor em módulo;
console.log(Math.sqrt(100)); // 10 -> raíz quadrada;
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.pow(3, 2)); // 9 -> potência
console.log(Math.E); // 2.718 -> número de Euler;
console.log(Math.log(2)) /** 0.6931471805599453 -> Retorna o log 
natural do valor (log na base 'e') */

console.log(Math.LN2); // valor do log natural de 2
console.log(Math.LN10); // valor do log natural de 10

// Funções trigonométricas
console.log(Math.sin(0)); // seno de 0
console.log(Math.sin(60)); // seno de 60

console.log(Math.cos(0)); // cosseno de 0
console.log(Math.cos(60)); // cosseno de 60


// Strings (numeros e letras ente '', "" ou ``)

// Com ''
let space = ' ';
let firstName = 'Gustavo';
let lastName = 'Tavares';
let country = 'Brazil';
let city = 'Fernandópolis';
let language = 'JavaScript';
let job = 'Programmer';

// Com ""
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";

// Com ``
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

// Concatenação de strings

// Com o operador '+' (ES5);

let fullName = firstName + space + lastName;
let personInfoOne = fullName + '.Im am ' + age + '. I live in ' + country;

console.log(personInfoOne);

// Strings longas
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph);

/**
 * String templates
 * Ex. 1
 */

console.log("Soma de 2 e 3 é igual a 5");
let a = 2;
let b = 3;

// Utilizando template -> dever ser feito com ``;
console.log(`A soma de ${a} e ${b} é igual a ${a+b}`);
/** Podem ser feitas comparações, operações aritméticas e ternárias */

// Métodos para manipular strings

// .lenght - retorna o tamanho da string

js = 'JavaScript';
console.log(js.length); // 10 -> retorna o tamanho da string
console.log(firstName); // 7

// Acessando letras da string

let string = 'JavaScript';
let firstLetter = string[0];
let secondLetter = string[1];
console.log(firstLetter); // J
console.log(secondLetter); // a

let lastIndex = string.length - 1;
console.log(lastIndex); // 9 -> posição da última letra da string;
console.log(string[lastIndex]); // t -> última letra da string;

// .toUpperCase() -> deixa a string em MAIUSCULO

console.log(string.toUpperCase()); // JAVASCRIPT

// .toLowerCase() -> deixa a string em minúsculo

console.log(string.toLowerCase()); // javascript

// .substr(inicio, fim **exclusivo) -> 

console.log(string.substring(4, 10)) // Script
console.log(string.substring(0, 4)); // Java

// split('condição') -> separa a string;

string = '30 Days Of JavaScript';
console.log(string.split(' ')); // 

string = 'Gustavo';
console.log(string.split(''));

// trim() -> remove espaços em branco dentro da string

string = '    Gustavo       ';
console.log(string.trim());

// includes(string) -> verifica se a string passada por parametro existe dentro 
// de outra string;

console.log(string.includes('Gus'));

// replace(oldvalue, newvalue) -> substitui um pedaço da string

string = 'finland';
console.log(string.replace('fin', 'nom'));

// charAt(index) -> retorna o carater da string de acordo com o índice passado 
// por parametro

console.log(string.charAt(2)) // n

// charCodeAt(index) -> retorna o valor ASCII do caracter de acordo com o índice 
// passado por parâmetro

console.log(string.charCodeAt(2));

// indexOf(substring) -> retorna a posição de uma substring se ela existir dentro 
// de outra string

console.log(string.indexOf('land'));

// lastIndexOf(substring) -> retorna a última posição de uma substring se ela existir 
// dentro de outra string. Se ela não existir, o método retorna -1

console.log(string.lastIndexOf('g'));
string = 'javascript';
console.log(string.lastIndexOf('a'));

// concat() -> junta várias substrings;

console.log(string.concat(' and ').concat('html.'));

// startsWith(substring) -> verifica se a string começa com uma determinada letra 
// ou expressão

console.log(string.startsWith('java')) // true;
console.log(string.startsWith('Java')) // false;

// endsWith(substring) -> verifica se a string começa com uma determinada letra 
// ou expressão

console.log(string.endsWith('.')); // false
console.log(string.endsWith('t')); // true

// search(substring || regex) -> retorna a primeira posição que a substring passada 
// por parâmetro aparece na string

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2 
console.log(string.search(/javascript/gi))  // 7 -> com expressão regular (regex)

// .match(substring, regex) -> retorna um array se a substring buscada existir 
// na string principal

string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'));

// Com regex

let pattern = /love/gi;
console.log(string.match(pattern)); // [love, love, love]

// repeat(n) -> repete a string n vezes

string = 'love';
console.log(string.repeat(10));

// Checando os tipos de dados -> palavra reservada typeof
console.log(typeof firstName); // string

// Casting

// String para int
number = '10';
let numInt = parseInt(number); // parseInt(string);
console.log(numInt);

numInt = Number(number); // Number(string);
console.log(numInt);

numInt = +number; // +string
console.log(numInt);

// String para float

number = '9.81';
numInt = parseFloat(number); // parseFloat(string);
console.log(numInt);

numInt = Number(number); // Number(string);
console.log(numInt);

numInt = +number; // +string
console.log(numInt);

// float para int

numInt = parseInt(number);
console.log(numInt); // 9;




