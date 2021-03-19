import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="navigation-bar">
                    <Link className="active" to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    { isEmpty(this.props.error)
                        ? <p className="count">Count of Panels: {this.props.panels.length}</p>
                        : ''
                    }
                </div>
                <div className="header-text">
                    <h1>{ this.props.headerText }</h1>
                    <em>{ this.props.children }</em>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    panels: state.pokemons.panels,
    error: state.pokemons.error
});

export default connect(mapStateToProps, null)(Header);
