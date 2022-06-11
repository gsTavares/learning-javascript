import React from "react";
import ReactDOM from "react-dom/client";

const root = document.getElementById('root');

// Mapping numbers array
const Numbers = ({ numbers }) => { // {numbers} = props

    // console.log(props); props {"numbers" : [1,2,3,4,5]}
    const list = numbers.map(number => <li key={number}>{number}</li>);
    return list;
}

// Mapping array of arrays
const Skill = ({skill: [tech, value]}) => { // skill = [value1, value2...] 
    return (
        <li>{tech}: {value}</li>
    );
}

const Skills = ({ skills }) => {
    const skillsList = skills.map(skill => <Skill key={skill} skill={skill} />); // skill = array = [value1, value2...]
    return skillsList;
}

// Mapping array of objects
const Country = ({country: {name, city}}) => {
    return(
        <div>
            <h1>{name}</h1>
            <small>{city}</small>
        </div>
    );
}

const Countries = ({countries}) => {
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

ReactDOM.createRoot(root).render(<App />);