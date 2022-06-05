/**
 * Introdução ao React - JSX
 * 
 * JSX -> JavaScript XML -> nos permite escrever elementos HTML com código JavaScript. 
 * Para que o JSX seja renderizado no navegador, ele é transpilado pelo babel.js (Transpilador: converte uma linguagem de 
 * alto/médio nível para outra linguagem de alto/médio nível. Nesse caso, de JSX para JavaScript)
 */

// Sintaxo JSX
// O uso de ; não é obirgatório

const jsxElement = <h1>I am a JSX element</h1>;
const welcome = <h1>Welcome to 30 days of React Challenge</h1>
const data = <small>Jun 2, 2022</small>
const title = <h2>Getting Started React</h2>

const header = (
    <header>
        <h1>Welcome to 30 days of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Gustavo Tavares</p>
        <small>Jun 2, 2022</small>
    </header>
)

// Para comentar um elemento JSX utilizamos /* */



