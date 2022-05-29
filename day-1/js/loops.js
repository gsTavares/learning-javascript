// Estruturas de repetição

/** 
 * Estruturas de repetição são utilizadas para repetir um trecho do código 
 * a partir de uma condição;
 * 
 * São estruturas de repetição: for, while, do while, for of, forEach, for in
 */

// for

// Com incremento ('i' vai sempre aumentando de valor)
for (let i = 0; i < 6; i++) {
    console.log(i); // O valor de i será impresso no console 6 vezes
}

let sum = 0;

for (let i = 0; i < 101; i++) {
    sum += i; // Para cada repetição, o valor de i é somado a variável 'sum';
}
console.log(sum);

const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) { // Utilizando o tamanho do array para determinar o limite de repetições
    console.log(nums[i]); // imprime a posição [i] do array
}

// Com decremento ('i' vai sempre diminuindo de valor)
for (let i = 5; i >= 0; i--) {
    console.log(i); // 5, 4, 3, 2, 1 e 0 serão impressos na tela
}

// while

let count = 0;
while (count < 10) { // enquanto 'count' for menor do que 10
    // Faça
    console.log(count);
    count++; // Adiciona 1 unidade em count e retorna para a linha 37
}

// do while (o código é executado pelo menos uma vez)

count = 11;
do {  // Faça
    console.log(count);
    count++;
} while (count < 11) // Enquanto count for menor do que 11   

// for of (de preferência utilizar quando tiver um array)
let numbers = [1, 2, 3, 4, 5];
for (const number of numbers) { // Para cada número do array 'numbers'
    // Faça
    console.log(number);
}

/**
 * forEach((number, index, array) => {
 *      // your code here
 * })
 * 
 * O método forEach recebe como argumento uma outra função, que tem o nome de callback function. 
 * Callback functions são funções que são argumentos de uma outra função;
 * 
 * number -> variável que vai referenciar cada elemento do array;
 * index -> posição de cada elemento em cada repetição
 * array -> o array que está sendo percorrido em si; 
 */

numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, i, array) => {
    console.log(`Número: ${number} ->`, `Posição ${i}`);
    console.log(array); // [1,2,3,4,5];
});

// for in (utilizar quando for percorrer um Objeto)

const user = {
    firstName: 'Gustavo',
    lastName: 'Tavares',
    age: 19,
    country: 'Brazil',
    skills: ['HTML', 'CSS', 'JS', 'React'],
}

for (const key in user) {
    console.log(`campo : ${key} ->`, `valor : ${user[key]}`);
}

// Interrompendo uma estrutura de repetição
for (let i = 0; i <= 5; i++) {
    if (i == 3) { // Se i for igual a 3
        break; // Para o laço
    }
    console.log(i) // 0, 1, 2
}

for (let i = 0; i <= 5; i++) {
    if (i == 3) { // Se i for igual a 3
        continue; // Pula para a próxima repetição (o restante do código abaixo será ignorado)
    }
    console.log(i) // 0 1 2 4 5
}
