import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
/**
 * React props
 * 
 * A palavra reservada 'props' do react faz referência as propriedades que um componente pode receber. 
 * Essas propriedades recebem dados e eles podem ser apresentados ou manipulados dentro de um componente.
 * 
 * As props podem ser utilizadas também para a transferência de dados entre componentes
 */

const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  );
}

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Header = (props) => (
  // <header>
  //   <div className='header-wrapper'>
  //     <h1>{props.welcome}</h1>
  //     <h2>{props.title}</h2>
  //     <h3>{props.subtitle}</h3>
  //     <p>
  //       {props.firstName} {props.lastName}
  //     </p>
  //     <small>{props.date}</small>
  //   </div>
  // </header>

  <header>
    <div className='header-wrapper'>
      <h1>{props.data.welcome}</h1>
      <h2>{props.data.title}</h2>
      <h3>{props.data.subtitle}</h3>
      <p>{props.data.author.firstName} {props.data.author.lastName}</p>

      <small>{showDate(props.data.date)}</small>
    </div>
  </header>
)

const Age = (props) => <div>The person age is {props.age} years old. </div>

const Weight = (props) => <p>The weight of the object on Earth is {props.weight} N.</p>

const Status = (props) => {
  let status = props.status ? 'Old enough to drive' : 'Too youn for driving';
  return <p>{status}</p>
}

const Skills = (props) => {
  const skillsList = props.skills.map((skill) => <li key={skill}> {skill}</li>);

  return <ul>{skillsList}</ul>
}

// Função como prop

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const App = () => {
  // Props do tipo string
  const welcome = 'Welcome to 30 Days Of React'
  const title = 'Getting Started React'
  const subtitle = 'JavaScript Library'
  const firstName = 'Asabeneh'
  const lastName = 'Yetayeh'
  const date = 'Oct 4, 2020'

  // Props do tipo number
  let currentYear = 2020
  let birthYear = 1820
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  // Props do tipo boolean
  let status = age >= 18;

  // Props do tipo objeto
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date()
  }

  return (
    <div className='app'>
      <Header
        // welcome={welcome}
        // title={title}
        // subtitle={subtitle}
        // firstName={firstName}
        // lastName={lastName}
        // date={date}

        data={data}
      />
      <Age age={age} />
      <Weight weight={gravity * mass} />
      <Status status={status} />
      <Skills skills={['HTML', 'CSS', 'JS']} />
      <Button onClick={() => alert('Hi')} text='Say hi' />
      <Button onClick={() => alert(new Date().toLocaleDateString())} text='Show date' />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);