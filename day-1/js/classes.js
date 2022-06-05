/**
 * Classes
 * 
 * JavaScript é uma linguagem de programação orientada a objeto. Tudo no JavaScript é composto por objetos, 
 * com suas devidas propriedades e métodos. Uma classe é criada para dar vida a um objeto.
 * 
 * Toda classe funciona como um molde para uma abstração de qualquer objeto presente na vida real. Por exemplo,
 * se quisermos criar uma classe no JavaScript que represente um carro: 
 * 
 * class Carro {
 *      constructor(){
 *          this.modelo = 'Gol',
 *          this.marca = 'Volkswagen'
 *          this.ano = 2019,
 *          this.cor = 'Branco'
            ....
 *      }
 * }
 * 
 */

// Criando uma classe - palavra reservada 'class'

class Person { // Classe vazia -> sem atributos e métodos

}
let person = new Person();
console.log(person); // Person {}

// Método construtor() -> define quais serão os atributos da classe

class Person2 {
    constructor(firstName, lastName) { // constructor(...atributes)
        this.firstName = firstName; // this -> é um ponteiro de auto referência, ou seja, faz a referencia a própria classe
        // na forma this.variable, ele aponta para um método ou atributo que está dentro da classe;
        this.lastName = lastName;
    }
}

person = new Person2();

console.log(person); // Person2 { firstName: undefined, lastName: undefined }

// Passando valores para o objeto
person = new Person2('Gustavo', 'Tavares');
console.log(person); // Person2 { firstName: 'Gustavo', lastName: 'Tavares' }

// Criando várias instâncias de um mesmo objeto
let personOne = new Person2('Gustavo', 'Tavares');
let personTwo = new Person2('João', 'Gomes');
let personThree = new Person2('Mateus', 'Lopes');

console.log(personOne); // Person2 { firstName: 'Gustavo', lastName: 'Tavares' }
console.log(personTwo); // Person2 { firstName: 'João', lastName: 'Gomes' }
console.log(personThree); // Person2 { firstName: 'Mateus', lastName: 'Lopes' }

/**
 * Méotodos de uma classe
 * 
 * O método constructor() é um método nativo do JavaScript que é utilizado para definir os atributos de uma classe.
 * Podemos criar nossos próprios métodos por meio de funções JavaScript declaradas dentro da classe;
 */

class Person3 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
    }

    getFullName() { // Método que retorna o nome completo
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

person = new Person3('Gustavo', 'Tavares', 19, 'Brazil', 'Fernandópolis');
console.log(person.getFullName()); // 'Gustavo Tavares'

/**
 * Métodos get e set -> são utilizados para acessar e modificar valores dos atributos de uma classe
 */

class Person4 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
}

person = new Person4('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');

console.log(person.getScore) // métodos get não precisam de parenteses para serem chamados;

class Person5 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
}

person = new Person5('Lidiya', 'Tekle', 28, 'Finland', 'Espoo'); // inicializado sem nenhuma skill e score

person.setScore = 1;
person.setSkill = 'HTML';
person.setSkill = 'CSS';
person.setSkill = 'JavaScript';

console.log(person); // {score: 1, skills: ['HTML', 'CSS', 'JavaScript']}

/**
 * Métodos staticos -> São acessíveis diretamente pela classe, e não por uma instância dela.
 * 
 * const person = new Person() --> a variável 'person' é uma instância da classe Person e não pode acessar os seus métodos estáticos;
 * const date = Date.now(); --> now() é um método estático da classe utilitária Date;
 * 
 */

class Person6 {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formattedSkills = skills ? `He knows ${skills}` : ''

        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
    }
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }

        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
    }
}

console.log(Person6.favoriteSkill());
console.log(Person6.showDateTime());

/**
 * Herança -> permite que atributos de uma classe 'pai' sejam acessadas por outra classe 'filha'. Por exemplo,
 * no código acima criamos uma classe 'Person (Pessoa)'. Se quisermos criar a classe 'Student (Estudante)',
 * veremos que ela compartilha das mesmas características de uma 'Pessoa'. Logo, podemos utiizar o conceito de herança 
 * para evitar a repetição de código
 */

class Student extends Person6 { // Palavra 'extends' -> indica a relação de herança com a classe da direita
    saySomething() {
        console.log(`I'm a child of the person class`);
    }
}

let student = new Student('Gustavo', 'Tavares', 19, 'Brazil', 'Fernandópolis'); // Acessando o construtor da classe Person6

console.log(student);
student.saySomething(); // Método próprio da classe Student
console.log(student.getFullName()); // Método herdado da classe Person6
console.log(student.getPersonInfo()); // Método herdado da classe Person6

/**
 * Sobrescrita de métodos -> quando trabalhamos com herança, podemos adicionar novas propriedades nas classes filhas ou 
 * modificar métodos herdados da classe pai utilizando a sobrescrita de métodos
 */

class Student2 extends Person6 {
    constructor(firstName, lastName, age, country, city, gender) { // Adicionado gênero somente na classe estudante
        super(firstName, lastName, age, country, city); // super() --> permite acessar todos os atributos da classe pai Person6
        this.gender = gender;
    }

    saySomething() {
        console.log('I am a child of the person class');
    }
    getPersonInfo() { // Sobrescrevendo o método getPersonInfo(), da classe Person6, adicionando a impressão do gênero, que é uma 
        // nova propriedade da classe Estudante

        let fullName = this.getFullName(); // recuperando o nome completo utilizando getFullName() da classe pai Person6
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`;

        let formattedSkills = skills ? `He knows ${skills}` : '';
        let pronoun = this.gender == 'Male' ? 'He' : 'She';

        let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
        return info;
    }
}

const s1 = new Student2(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
)

s1.setScore = 1;
s1.setSkill = 'HTML';
s1.setSkill = 'CSS';
s1.setSkill = 'JavaScript';

console.log(s1);
s1.saySomething();
console.log(s1.getFullName());
console.log(s1.getPersonInfo());

