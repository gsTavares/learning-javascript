// Objetos

// Possuem uma relação de chave(key) e valor(value);

// Criando um objeto vazio
let person = {};

// Criando um objeto com valores
const rectangle = {
    length: 20,
    width: 20
}

console.log(rectangle);

// Acessando valores de um objeto
person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],

    // Criando um método para o objeto
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    'phone number': '+3584545454545',
}

// Utilizando .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.country);

// Utilizando [key_name]
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['age']);
console.log(person['age']);
console.log(person['country']);

// Acessando um método do objeto
console.log(person.getFullName());

// Modificando o valor dos atributos de um objeto

person.nationality = 'Ethiopian';
person.country = 'Finland';
person.title = 'teacher';
person.skills.push('Meteor');
person.skills.push('SasS');
person.isMarried = true;

// Adicionando uma função que não existia no objeto
person.getPersonInfo = function () {

    /** 
     * Pegando todas as skills, com exceção da última, utilizando o slice()
     * e transformando o sub-array em string, separando cada skill por ','
     * utilizando o join(', ');
     */
    let skillsWithoutLastSkill = this.skills
        .slice(0, this.skills.length - 1)
        .join(', ');

    /**
     * Armazenando a última skill;
     */
    let lastSkill = this.skills.slice(this.skills.length - 1);

    /**
     * Concatenando as skills
     */
    let skills = `${skillsWithoutLastSkill} and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}`;

    return statement;
}

console.log(person.getPersonInfo());

// Métodos dos Objetos

person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
        street: 'Heitamienkatu 16',
        pobox: 2002,
        city: 'Helsinki',
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}

// Object.assign({}, object) -> copia um objeto;
const copyOfPerson = Object.assign({}, person);
console.log(copyOfPerson);

// Object.keys(object) -> armazena todas as keys (chaves) de um objeto dentro de um array;
const keys = Object.keys(copyOfPerson);
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']

const address = Object.keys(copyOfPerson.address);
console.log(address); // Nesse caso, 'address' é uma key de 'person', mas 
// ao mesmo tempo é um objeto. Logo, os campos 'street', 'pobox' e 'city' serão impressos no console;

// Object.values(object) -> armazena todos os values (valores) de um objeto dentro de um array;
const values = Object.values(copyOfPerson);
console.log(values);

// Object.entries(object) -> armazena todas as keys (chaves) e valores (values) de um objeto dentro de um array (que é um array de arrays (what?))
const entries = Object.entries(copyOfPerson);
console.log(entries); // [['firstname'], ['Asabeneh'], ...];

// .hasOwnProperty(key) -> verifica se uma determinada key (chave) existe em um objeto
console.log(copyOfPerson.hasOwnProperty('name')); // false
console.log(copyOfPerson.hasOwnProperty('firstName')); // true

