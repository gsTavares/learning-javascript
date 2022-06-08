import React from 'react'
import ReactDOM from 'react-dom/client'
import perfil from './img/perfil.jpeg'

/**
 * Criando componentes
 * 
 * Componentes são uma parte do código que pode ser reutilizado durante a construção da nossa UI (User Interface)
 * 
 * Sintaxe de um componente funcional
 * 
 * const ComponentName = () => {
 *      return(
 *          // jsx here
 *      );
 * }
 * 
 * Componentes que retornam uma única escrita JSX são chamados de small components (componentes pequenos)
 * 
 * const Button = () => <button style={buttonStyles}> action </button>
 */

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={perfil} style={{width: '350px', height: '350px', borderRadius: '50%'}} alt='asabeneh image' />
    <h2>Gustavo Tavares</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
      <HexaColor />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

const hexaValue = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
}

const HexaColor = () => {
    let hexStyle = {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: '0.5rem', 
        height: '5vh', 
        backgroundColor: hexaValue(), color: 'white'
    }

    return (
        <div style={hexStyle}>{hexaValue()}</div>
    );

} 

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(<App />, root);