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

for(const [country, city] of countries){
    console.log(country, city);
}

const [x, y] = [2, (value) => value ** 2];

console.log(x, y(2));
