// Class components

/**
 * Sintaxe: 
 * 
 * class Example extends React.Component {
 *      constructor(props){
 *          super(props)
 *      }
 * 
 *      render() {
 *          return(
 *              // jsx code here
 *          )
 *      }
 * }
 */

import React from "react";
import ReactDOM from "react-dom/client";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date
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
                </div>
            </header>
        )
    }
}

const App = () => {
    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
            firstName: 'Asabeneh',
            lastName: 'Yetayeh',
        },
        date: 'Oct 7, 2020',
    }

    return (
        <div className='app'>
            <Header data={data} />
        </div>
    )
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />, root);
