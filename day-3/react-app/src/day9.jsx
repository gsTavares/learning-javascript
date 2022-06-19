/**
 * Conditional rendering
 * 
 * Podemos alterar ou escolher se queremos renderizar um conteúdo ou não dependendo
 * do estado de um componente
 */

import React from "react";
import ReactDOM from "react-dom/client";

class Header extends React.Component {
    render() {
        const {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date,
        } = this.props.data

        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <small>{date}</small>
                    <p>Select a country for your next holiday</p>
                </div>
            </header>
        )
    }
}

const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
        {text}
    </button>
)

const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: '3px auto',
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
}

class App extends React.Component {
    state = {
        loggedIn: false,
    }

    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        const data = {
            welcome: '30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Asabeneh',
                lastName: 'Yetayeh',
            },
            date: 'Oct 9, 2020',
        }

        /**
         *  Exemplo de formatação condicional usando if/else 
         *  Operador ternário e operador && também podem ser utilizados
         *  
         * Funcionamento do operador && => se a condição da esquerda for verdadeira,
         * o JSX à esquerda do operador será renderizado
         * 
         * 
         * 
         * */
        let status
        let text
        if (this.state.loggedIn) {
            status = <h3>Welcome to 30 days of React</h3>
            text = 'Logout'
        } else {
            status = <h3>Please Login</h3>
            text = 'Login'
        }

        return (
            <div className='app'>
                <Header data={data} />
                {status}
                <Button text={text} style={buttonStyles} onClick={this.handleLogin} />
            </div>
        )
    }
}


const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <App />
)

