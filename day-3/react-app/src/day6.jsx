import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById('root');

// Mapping numbers array
const Numbers = ({ numbers }) => { // {numbers} = props

    // console.log(props); props {"numbers" : [1,2,3,4,5]}
    const list = numbers.map(number => <li key={number}>{number}</li>);
    return list;
}

// Mapping array of arrays
const Skill = ({ skill: [tech, value] }) => { // skill = [value1, value2...] 
    return (
        <li>{tech}: {value}</li>
    );
}

const Skills = ({ skills }) => {
    const skillsList = skills.map(skill => <Skill key={skill} skill={skill} />); // skill = array = [value1, value2...]
    return skillsList;
}

// Mapping array of objects
const Country = ({ country: { name, city } }) => {
    return (
        <div>
            <h1>{name}</h1>
            <small>{city}</small>
        </div>
    );
}

const Countries = ({ countries }) => {
    const countryList = countries.map(country => <Country key={country.name} country={country} />) // country {'name': 'value', city: 'value'}
    return countryList;
}

const App = () => {
    const numbers = [1, 2, 3, 4, 5];
    const skills = [
        ['HTML', 10],
        ['CSS', 7],
        ['JavaScript', 9],
        ['React', 8],
    ]
    const countries = [
        { name: 'Finland', city: 'Helsinki' },
        { name: 'Sweden', city: 'Stockholm' },
        { name: 'Denmark', city: 'Copenhagen' },
        { name: 'Norway', city: 'Oslo' },
        { name: 'Iceland', city: 'Reykjavík' },
    ]
    return (
        <div className="container">
            <h1>Numbers list</h1>
            <ul>
                <Numbers numbers={numbers} />
            </ul>
            <Skills skills={skills} />
            <Countries countries={countries} />
        </div>
    );
}

// ReactDOM.createRoot(root).render(<App />);

/**
 * Exercices: level 2
 */

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function isPrime(number) {
    if (number <= 1) {
        return false
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false
            }
        }
    }
    return true;
}

const primes = arr.filter(n => isPrime(n));

const NumItem = ({ number }) => {
    let numberStyle = {
        backgroundColor: primes.findIndex((n) => n == number) !== -1 ? '#fd5e53' : number % 2 == 0 ? '#21bf73' : '#fddb3a',
        borderRight: 'solid 3px white',
        borderTop: 'solid 3px white',
        color: 'white',
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }

    return <div style={numberStyle}>{number}</div>
}

const NumPanel = ({ numbersArr }) => {
    let numbersList = numbersArr.map(number => <NumItem key={number} number={number} />)

    return (
        <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
            <h1>30 Days of React</h1>
            <h2>Number generator</h2>
            <div style={{ width: '100%', height: '60vh', marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '95%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(12.5%, 1fr))', textAlign: 'center' }}>
                    {numbersList}
                </div>
            </div>
            <div style={{ marginTop: '1rem', width: '80%' }}>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginLeft: '1rem' }}>
                    <div style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#fddb3a', borderRadius: '5px', marginRight: '0.3rem' }} ></div>
                    <p>odd numbers</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '0.5rem', marginLeft: '1rem' }}>
                    <div style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#21bf73', borderRadius: '5px', marginRight: '0.3rem' }} ></div>
                    <p>even numbers</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '0.5rem', marginLeft: '1rem' }}>
                    <div style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#fd5e53', borderRadius: '5px', marginRight: '0.3rem' }} ></div>
                    <p>prime numbers</p>
                </div>
            </div>
        </div>


    )
}

ReactDOM.createRoot(root).render(<NumPanel numbersArr={arr} />);