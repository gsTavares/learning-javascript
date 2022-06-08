import React from 'react'
import ReactDOM from 'react-dom/client'
// importando uma foto
import perfil from '../src/img/perfil.jpeg'
import frontEndTechnologies from '../src/img/frontend_technologies.png';

const root = document.getElementById('root')

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const student = {
  firstName: 'Gustavo',
  lastName: 'Tavares',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {student.firstName} {student.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 2002
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {student.firstName} {student.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// Importando objetos de mídia no React
const user = (
  <div>
    <img style={{width: 350, height: 350}} src={perfil} alt="gustavo tavares img" />
  </div>
);

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

// ReactDOM.createRoot(root).render(app);

// Exercícios: nível 2

// 1)
const image = (
    <div style={{width: '100vw'}}>
      <img src={frontEndTechnologies} alt="" />
    </div>
);


// ReactDOM.createRoot(root).render(image);

// 2)

const formContainer = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const form = {
  backgroundColor: '#c2e6f4',
  width: '95%',
  padding: '10px',
  borderRadius: '0.8rem',
}

const inputBox = {
  width: '100%',
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}

const input = {
  border: 'none',
  borderRadius: '0.5rem',
  padding: '1rem'
}

let submit = {
  marginTop: '2rem',
  width: '20%',
  alignSelf: 'center',

  border: 'none',
  backgroundColor: '#f37474',
  padding: '0.8rem',
  borderRadius: '0.5rem',
  color: 'white',
  marginBottom: '2rem',
  cursor: 'pointer'
}

const subscribeForm = (
  <div style={formContainer}>
    <div style={form}>
      <h1 style={{textAlign: 'center', marginTop: '2rem'}}>SUBSCRIBE</h1>
      <p style={{textAlign: 'center', fontSize: '1.5rem', marginTop: '2rem'}}>Sign up with your email address to receive news and updates</p>

      <form style={inputBox}>
          <div style={{width: '36%', display: 'flex', justifyContent: 'space-between', marginLeft: 'auto', marginRight: 'auto'}}>
            <input style={input} type="text" name="" id="" placeholder='First name' />
            <input style={input} type="text" name="" id="" placeholder='Last name' />
            <input style={input} type="text" name="" id="" placeholder='Email' />
          </div>

        <button style={submit} type='submit'>Subscribe</button>
      </form>
    </div>
  </div>
);


// ReactDOM.createRoot(root).render(subscribeForm);

// 3)

const cardContainer = {
  fontFamily: 'Arial Narrow',
  width: '100%',
  display: 'block',
  padding: '1.5rem'
}

const cardTop = {
  textAlign: 'left',
  width: '250px'
}

const cardImg = {
  borderRadius: '50%',
  
  width: '250px',
  height: '250px'
}

const skillsBox = {
  width: '100%',
  display: 'flex'
}

const skillItem = {
  padding: '0.5rem',
  borderRadius: '0.5rem',
  color: 'white',
  fontWeight: 'bold',
  minWidth: '3rem',
  backgroundColor: '#2acfcf',
  textAlign: 'center'
}

const skills = ['HTML', 'CSS', 'JS', 'JAVA', 'REACT', 'NODE', 'MYSQL', 'POSTGRESQL', 'GIT'];

let [firstSkill, ...rest] = skills;

const otherSkillsStyle = {...skillItem};

otherSkillsStyle.marginLeft = '0.5rem';

const otherSkills = rest.map((skill) => <div key={skill} style={otherSkillsStyle}> {skill} </div>)

const card = (
  <div style={cardContainer}>
    <div style={cardTop}>
      <img style={cardImg} src={perfil} alt="perfil gustavo" />
      <p style={{fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'left', width: 'auto', fontWeight: 'bold'}}>GUSTAVO TAVARES</p>
      <p style={{marginBottom: '0.5rem'}}>Junior Developer, Brazil</p>
      <p style={{fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'left', width: 'auto', fontWeight: 'bold'}}>SKILLS</p>
    </div>

    <div style={skillsBox}>
      <div style={skillItem}> {firstSkill}</div>
      {otherSkills}
    </div>

    <p style={{marginTop: '1.5rem'}}>Joined in {new Date().toLocaleDateString()}</p>
  </div>
);

ReactDOM.createRoot(root).render(card);