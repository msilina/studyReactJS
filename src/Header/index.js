import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <h1>{ props.headerText }</h1>
            <em>{ props.children }</em>
        </div>
    );
}

export default Header;
