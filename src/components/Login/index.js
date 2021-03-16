import React, { Component } from 'react';
import { Field, Form } from 'react-final-form';
import { isUndefined, isEmpty, isNull } from 'lodash';
import { Redirect } from 'react-router-dom';

import Input from '../../common/components/Input';
import { required, email, minLength8, atLeastOneNumberAndCharacter} from '../../validation/validationRules';

import './Login.css';
import logo from '../../images/logo.png';

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            username: undefined,
            password: undefined,
            errors: {
                username: '',
                password: ''
            }
        }

        this.saveToLocalstorage = this.saveToLocalstorage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isDisabled = this.isDisabled.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('errors') !== null) {
            this.setState({
                errors: JSON.parse(sessionStorage.getItem('errors'))
            });
        }
    }

    validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => !isEmpty(val) > 0 && (valid = false));
        return valid;
    };

    saveToLocalstorage = saveTo => event => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
            case 'username': 
            const usernameWarnings = [required(value), email(value)].filter(el => el).join('; ');
                errors.username = !isEmpty(usernameWarnings) ? `Warnings: ${usernameWarnings}` : '';
                break;
            case 'password':
                const passwordWarnings = [required(value), minLength8(value), atLeastOneNumberAndCharacter(value)].filter(el => el).join('; ');
                errors.password = !isEmpty(passwordWarnings) ? `Warnings: ${passwordWarnings}` : '';
                break;
            default:
                break;
        }
    
        this.setState({errors, [name]: value});
        sessionStorage.setItem(saveTo, event.target.value);
        sessionStorage.setItem('errors', JSON.stringify(this.state.errors));
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            this.props.history.push('/')
        }
    }

    isUsernameFilled() {
        return !isUndefined(this.state.username) || !isNull(sessionStorage.getItem('username'));
    }

    isPasswordFilled() {
        return !isUndefined(this.state.password) || !isNull(sessionStorage.getItem('password'));
    }

    isDisabled() {
        return !isEmpty(this.state.errors.password) || !isEmpty(this.state.errors.username) ||
            !this.isUsernameFilled() || !this.isPasswordFilled();
    }

    render() {
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        return (
            <div className="login">
                <h1 className="login-text">Login to Application</h1>
                <img className="img-logo" src={ logo } alt="Logo" />
                <form onSubmit={ this.handleSubmit }>
                    <div className="inputs">
                        <Input
                            className="input_element"
                            inputtype="input"
                            name="username"
                            placeholder="Enter username"
                            defaultValue={ username }
                            onChange={ this.saveToLocalstorage('username') } 
                            error={ this.state.errors.username}
                        />
                        <Input
                            className="input_element"
                            inputtype="input"
                            name="password"
                            placeholder="Enter password"
                            defaultValue={ password }
                            onChange={ this.saveToLocalstorage('password') }
                            error={ this.state.errors.password}
                        />
                        <button className="primary" disabled={ this.isDisabled() }>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
