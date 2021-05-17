import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import { login, logout } from '../../redux/reducer/loginSlice';

import './Header.css';

class Header extends Component {

    renderLogin = () =>
        this.props.isUserLoggedIn
            ? (<Link to="/" onClick={() => this.props.logout() }>Logout</Link>)
            : (<Link to="/login">Login</Link>);

    render() {
        return (
            <div className="header">
                <div className="navigation-bar">
                    <Link className="active" to="/">Home</Link>
                    { this.props.role === 'Admin' ? <Link to="/settings">Settings</Link> : null }
                    { this.renderLogin() }
                    { isEmpty(this.props.error)
                        ? <p className="count">Count of Panels: {this.props.panels.length}</p>
                        : ''
                    }
                </div>
                <div className="header-text">
                    <h1>{ this.props.headerText }</h1>
                    { !isEmpty(this.props.username)
                        ? <em>{ `Hello,  ${ this.props.username}` }</em>
                        : null
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    panels: state.pokemons.panels,
    error: state.pokemons.error,
    username: state.auth.username,
    isUserLoggedIn: state.auth.isUserLoggedIn,
    role: state.auth.role
});

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Header);
