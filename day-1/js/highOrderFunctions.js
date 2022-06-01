/**
 * Funções de ordem superior são funções que recebem outras funções como parâmetro ou retorna uma função como valor
 * 
 * As funções que servem de parâmetro para outras funções são chamadas de 'Callback functions'
 */

const callback = (n) => {
    return n ** 2;
}

function cube(callback, n) {
    return callback(n) * n;
}

console.log(cube(callback, 3)); // 27

// Retornando uma função

const highOrder = n => {
    const multiplyByM = m => {
        return n * m;
    }
    return multiplyByM;
}

console.log(highOrder(2)(3)); // 6

// Exemplo de utilização de uma callback function;

const numbers = [1, 2, 3, 4, 5];

const sumArrayElements = arr => {
    let sum = 0;
    const addElement = element => {
        sum += element;
    }

    arr.forEach(e => {
        addElement(e);
    });

    return sum;
}

console.log(sumArrayElements(numbers)); // 15

/**
 * Para a manipulação de tempo, utilizamos duas high order functions. São elas:
 * 
 * setInterval(callback, durationInMiliSeconds);
 * setTimeout(callback, durationInMiliSeconds);
 * 
 */

// setInterval
const sayHello = () => {
    console.log('Hello');
}

setInterval(sayHello, 2000); // Imprime hello a cada 2 segundos
setTimeout(sayHello, 2000); // Imprime hello depois de esperar 2 segundos

