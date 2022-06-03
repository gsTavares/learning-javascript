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