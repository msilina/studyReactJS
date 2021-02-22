import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { Consumer } from '../../context/PanelContext';

const Header = (props) => {
    return (
        <div className="header">

            <div className="navigation-bar">
                <Link className="active" to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Consumer>
                    { panelContext => <p className="count">Count of Panels: {panelContext.panelsLength}</p> }
                </Consumer>
            </div>
            <div className="header-text">
                <h1>{ props.headerText }</h1>
                <em>{ props.children }</em>
            </div>
        </div>
    );
}

export default Header;
