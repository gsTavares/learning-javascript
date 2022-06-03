/**
 * O que é destructuring?
 * 
 * É uma forma de assimilar cada elemento de um array ou um atributo de um objeto a uma variável única
 * Essa forma de escrita deixa o código mais limpo
 * 
 * Quando utilizar?
 * 
 * Quando o array ou o objeto for pequeno
 * 
 */

/**
 * Sintaxe
 * 
 * const arr = [1,2,3];
 * const [num1, num2, num3] = arr;
 */

const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, bodyTemp, boilingTemp] = constants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

/**
 * Desestruturando arrays de arrays
 */

const fullStack = [
    ['html', 'css', 'js', 'react'],
    ['node', 'express', 'mongoDb']
];

const [frontEnd, backEnd] = fullStack;

const [hmtl, css, js, react] = frontEnd;

console.log(frontEnd, backEnd);
console.log(frontEnd);

/**
 * É possível omitir os items simplesmente deixando um espaço vazio durante
 * o destructuring. Também é possível armazenar o resto de um array utilizando '...rest'
 */

const nums = [1, 2, 3, 4, 5, 6, 7];
const [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3, rest);

const countries = [
    ['finland', 'helsinki'],
    ['sweden', 'stockholm'],
    ['norway', 'oslo']
];

for (const [country, city] of countries) {
    console.log(country, city);
}

const [x, y] = [2, (value) => value ** 2];

console.log(x, y(2));

/**
 * Destructuring em objetos
 */

let rectangle = {
    width: 20,
    height: 10
}

let { width, height } = rectangle;

console.log(width, height) // 20 10

/**
 * Utilizando alias (renomeando as variáveis)
 */

let { width: w, height: h } = rectangle;
console.log(w, h);

const props = {
    post: {
        title: 'Destructuring and Spread',
        lastName: 'Tavares',
        age: 250
    }
}

let { post } = props;

let { title, lastName, age } = post;

console.log(title, lastName, age);

/**
 * Utilização laço de repetição
 */

const languages = [
    { lang: 'Portugueses', count: 91 },
    { lang: 'English', count: 135 },
    { lang: 'Spanish', count: 35 }
];

for (const { lang, count } of languages) {
    console.log(`The ${lang} is spoken in ${count} countries`);
}

/**
 * Destructuring como parâmetro de funções
 */

rectangle = {
    width: 20,
    height: 10
}

const calculateArea = ({ width: largura, height: altura }) => {
    return largura * altura;
}

console.log(calculateArea(rectangle));

/**
 * Spreading (..rest)
 * 
 * Utilizando para copiar arrays e objetos ou recuperar o resto de um array
 * ou indicar que uma função recebe infinitos parâmetros em uma arrow function
 * 
 */

let numbers = [1, 2, 3, 4, 5, 6];

[n1, n2, n3, ...otherNums] = numbers;

console.log(...otherNums) // 4,5,6

/**
 * Copiando um array
 */

let newNumbers = [...numbers];

console.log(newNumbers) // [1,2,3,4,5,6]

/**
 * Copiando objetos
 */

let person = {
    name: 'Gustavo',
    title: 'React dev',
    country: 'Brazil',
    city: 'Fernandopolis'
}

let copiedPerson = { ...person }
console.log(copiedPerson);

/**
 * Modificando um objeto durante a cópia
 */

copiedPerson = { ...person, title: 'Java dev' }
console.log(copiedPerson);

/**
 * Spreading na arrow function (...args)
 */

const sum = (...args) => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));