/**
 * States
 * 
 * O que são estados? 
 * Definição: são uma condição particular em que algo ou 
 * alguém se encontra em um período específico de tempo
 * 
 * Para o React, o estado é um objeto presente dentro dos 
 * componentes e permite que eles sejam re-renderizados
 * quando os dados desse objeto mudam
 */

import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
    state = {
        count: 0
    }

    addOne = () => {
        this.setState({ count: this.state.count + 1 })
    }

    minusOne = () => {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        /**
         *  Recuperando um dos valores que compõem o
         *  estado do componente 
         */
        const count = this.state.count;
        /**
         * Para alterar esse valor, utiliza-se a função
         * this.setState()
         */
        return (
            <div className="App">
                <h1>{count}</h1>
                <button className="btn btn-add" onClick={this.addOne}>
                    +1
                </button>

                <button className="btn btn-minus" onClick={this.minusOne}>
                    -1
                </button>
            </div>
        )
    }
}

// Outro exemplo utilizando state
class App2 extends React.Component {
    state = {
        image: 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',

        theme: {
            backgroundColor: 'white',
            color: 'black'
        }
    }

    changeAnimal = () => {
        let dogUrl =
            'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        let catUrl =
            'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'

        let image = this.state.image === catUrl ? dogUrl : catUrl
        this.setState({ image })
    }

    applyDarkTheme = () => {
        let lightMode = {
            backgroundColor: 'white',
            color: 'black'
        }

        let darkMode = {
            backgroundColor: 'black',
            color: 'white'
        }

        let {theme: {backgroundColor, color}} = this.state

        let theme = backgroundColor === lightMode.backgroundColor 
        && color === lightMode.color ? darkMode : lightMode;

        this.setState({theme});
    }

    render() {
        let {theme: {backgroundColor, color}} = this.state

        return (
            <div className="App" style={{backgroundColor, color}}>
                <h1>30 days of React</h1>
                <div className="animal">
                    <img src={this.state.image} alt="animal" srcset="" />
                </div>

                <button onClick={this.changeAnimal}>
                    Change
                </button>

                <button onClick={this.applyDarkTheme} style={{marginLeft: '10px'}}>
                    Change theme
                </button>
            </div>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App2 />)
