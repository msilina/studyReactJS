import React, { Component } from 'react';

import './Login.css';
import logo from '../../images/logo.png';

class Login extends Component {

    constructor(props) {
        super(props);

        this.saveToLocalstorage = this.saveToLocalstorage.bind(this);
    }

    saveToLocalstorage = saveTo => event => {
        sessionStorage.setItem(saveTo, event.target.value);
    }

    render() {

        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');
        
        return (
            <div className="login">
                <h1 className="login-text">Login to Application</h1>
                <img className="img-logo" src={ logo } alt="Logo" />
                <div className="inputs">
                    <input name="username" className="input" placeholder="Enter username" defaultValue={ username } onChange={ this.saveToLocalstorage('username') } />
                    <input name="password" className="input" placeholder="Enter password" defaultValue={ password } onChange={ this.saveToLocalstorage('passsword') } />
                    <button className="primary">
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default Login;
