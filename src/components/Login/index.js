import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUndefined, isEmpty, isNull } from 'lodash';
import { useDispatch,useSelector } from "react-redux";

import Input from '../../common/components/Input';
import { required, email, minLength8, atLeastOneNumberAndCharacter} from '../../validation/validationRules';
import { login, logout } from '../../redux/reducer/loginSlice';
import { store } from '../../store';

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

    saveToLocalstorage = event => {
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
    }

    handleSubmit(event) {
        const data = {
            username: this.state.username,
            password: this.state.password
        }

        event.preventDefault();
        if (this.validateForm(this.state.errors)) {
            this.props.login(data);
            this.props.history.push('/');
        }
    }

    isUsernameFilled() {
        return !isUndefined(this.state.username);
    }

    isPasswordFilled() {
        return !isUndefined(this.state.password);
    }

    isDisabled() {
        return !isEmpty(this.state.errors.password) || !isEmpty(this.state.errors.username) ||
            !this.isUsernameFilled() || !this.isPasswordFilled();
    }

    render() {
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
                            onChange={ this.saveToLocalstorage } 
                            error={ this.state.errors.username}
                        />
                        <Input
                            className="input_element"
                            inputtype="input"
                            name="password"
                            placeholder="Enter password"
                            onChange={ this.saveToLocalstorage }
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


const mapStateToProps = state => {
    return {
        username: state.auth.username,
        password: state.auth.password,
        role: state.auth.role,
        isUserLoggedIn: state.auth.isUserLoggedIn
    }
};

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Login);

