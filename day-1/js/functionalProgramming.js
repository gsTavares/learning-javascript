/**
 * Programação functional
 * 
 * Serve para minimizar a escrita de código para deixá-lo mais limpo 
 * e simplificar a resolução de problemas que seriam complexos de serem resolvidos
 * de uma maneira tradicional
 * 
 * Métodos da programação funcional: forEach, map, filter, reduce, find, 
 * findIndex, some, every
 */

/**
 * forEach -> Utilizamos o forEach com a finalidade de iterar sobre um array
 * 
 * array.forEach(element => {
 *      // use the element in your code here
 * })
 */

let countries = ['Finland', 'Estonia', 'Sweden', 'Norway'];

countries.forEach(country => {
    console.log(country.toUpperCase());
});

/**
 * map -> Utilizamos o map quando queremos modificar os elementos de um array.
 * O map retorna um array novo com as modificações realizadas
 */

const newCountries = countries.map(country => country.toUpperCase());
console.log(newCountries);

/**
 * filter -> Utilizamos o filter quando queremos filtrar os items de um array baseado numa expressão booleana. Se 
 * verdadeira, o elemento é adicionado a um novo array, que contém somente os items que satisfazem o filtro
 */

countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland'];
const countriesWithLand = countries.filter((country) =>
    country.includes('land') // Se verdadeiro, adiciona 'country' em um novo array
);

console.log(countriesWithLand);

/**
 * reduce -> Utilizamos quando precisamos fazer operações com os elementos do array (normalmente operações matemáticas 
 * ou de concatenação). Essa função recebe como parâmetro duas varáveis: a primeira faz referência a uma variável acumuladora
 * e a segunda faz referência ao elemento do array que está sendo acessado em tempo de execução.
 * 
 * const reducedArray = array.reduce((result, currentElement) => {
 *      return 
 * });
 * 
 * reduce retorna um único valor
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = numbers.reduce((result, n) => {
    return result + n;
});

console.log(sum); // 45

// reduce() com valor inicial
sum = numbers.reduce((result, n) => result + n, 5); // valor inicial = 5

console.log(sum); // 50

// Concatenando strings

let strings = ['Hello', 'World'];

let helloWorld = strings.reduce((phrase, word) => phrase + ' ' + word);

console.log(helloWorld); // Hello World

/**
 * find -> Utilizado para encontrar a primeira ocorrência de um item no array baseado em uma condição;
 * retorna o primeiro item que satisfaz essa condição
 * 
 * array.find((element) => {
 *      // condition goes here
 * })
 */

const firstEvenNum = numbers.find((n) => n % 2 === 0);
const firstOddNum = numbers.find((n) => n % 2 !== 0);

console.log(numbers);
console.log('primeiro numero par: ', firstEvenNum);
console.log('primeiro numero impar: ', firstOddNum);

/**
 * findIndex -> funciona igual ao find(), porém retorna a posição do primeiro elemento encontrado baseado em uma condição
 */

const indexOfFirstEvenNum = numbers.findIndex((n) => n % 2 === 0);

console.log('posição do primeiro numero par: ', indexOfFirstEvenNum);

/**
 * some() e every() -> são duas funções que retornam um valor booleano (verdadeiro ou falso). 
 * Essas funções são utilizadas para verificar a existência dos itens de um array.
 * 
 * some() retorna verdadeiro se pelo menos um item do array satisfaz a condição expressa na função.
 * every() retorna verdadeiro se todos os itens do array satisfazerem a condição expressa na função.
 */

let evenArr = [0, 2, 4, 6, 8, 10];
let miscArr = [1, 3, 4, 8, 0, 15, 22];

console.log(evenArr.some(n => n % 2 === 0)); // true
console.log(evenArr.every(n => n % 2 === 0)); // true
console.log(evenArr.some(n => n % 2 !== 0)); // false
console.log(evenArr.every(n => n % 2 !== 0)); // false

console.log(miscArr.some(n => n % 2 === 0)); // true
console.log(miscArr.every(n => n % 2 === 0)); // false
console.log(miscArr.some(n => n % 2 !== 0)); // true
console.log(miscArr.every(n => n % 2 !== 0)); // false

// Exercícios
console.log('------------------------Exercicios--------------------------');
let products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// 1- imprimir o preço de cada produto usando forEach()
products.forEach(item => console.log(item.price));

// 2 - imprimir os preços de cada item de acordo com a frase abaixo
products.forEach(item => {
    const undefinedPrice = 'unknown';
    typeof (item.price) === 'number' ? console.log(`The price of banana is ${item.price} euros.`)
        : console.log(`The price of banana is ${undefinedPrice}.`);
});

sum = 0;

// 3 - somar o preço de cada item utilizando forEach
products.forEach((item) => {
    if (typeof (item.price) === 'number') {
        sum += item.price;
    }
});

console.log(`total = ${sum}`);

// 4 - criar um array de preços utilizando map()

const prices = products.map(item => item.price);
console.log(prices);

// 5 - Filtrar os produtos pelo preço;

const numericPrices = products.filter(item => typeof (item.price) === 'number');
console.log(numericPrices);

// 6 - Encadear os métodos map(), filter() e reduce() para somar o preço dos produtos

sum = 0;

sum = products.map(item => item.price)
    .filter(item => typeof (item) === 'number')
    .reduce((result, itemPrice) => result += itemPrice);

console.log(sum);

// 7 - Calular o total do preço dos produtos utilizando apenas o reduce;

products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const sumWithReduceOnly = products.reduce((resultado, product) => {
    let subTotal = 0;
    if (typeof (product.price) === 'number') {
        subTotal = product.price;
    }

    return resultado + subTotal;
}, 0)

console.log('sum with reduce only = ', sumWithReduceOnly);

// 8 - Encontra o primeiro produto sem preço

const noPrice = products.find((item) => typeof (item.price) !== 'number');

console.log(noPrice);

// 9 - Retornar a posição do primeiro produto sem preço

const indexOfNoPrice = products.findIndex(item => typeof (item.price) !== 'number');
console.log(`position of noPrice = ${indexOfNoPrice}`);

// 10 - Verificar se alguns produtos não possuem preço

const someWithNoPrice = products.some(item => typeof (item.price) !== 'number');
console.log(`some products does not have price? ${someWithNoPrice}`);

// 11 - Verificar se todos os produtos possuem preço
const everyWithPrice = products.every(item => typeof (item.price) === 'number');
console.log(`every products does have price? ${everyWithPrice}`);

/**
* Output dos exercícios 
* 3
* 6

* 8
* 10
* The price of banana is 3 euros.
* The price of banana is 6 euros.
* The price of banana is unknown.
* The price of banana is 8 euros.
* The price of banana is 10 euros.
* The price of banana is unknown.
*   total = 27
*   [3, 6, ' ', 8, 10, '']
*   [{ product: 'banana', price: 3 },
*   { product: 'mango', price: 6 },
*   { product: 'avocado', price: 8 },
*   { product: 'coffee', price: 10 }]
* 27
* sum with reduce only = 27
* { product: 'potato', price: ' ' }
* position of noPrice = 2
* some products does not have price ? true
* every products does have price ? false
*/