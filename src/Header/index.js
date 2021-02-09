import React from 'react';
import { Button, Badge } from 'react-bootstrap';
import './Header.css';

import { Consumer } from '../context/PanelContext';

const Header = (props) => {
    return (
        <div className="header">
            <h1>{ props.headerText }</h1>
            <em>{ props.children }</em>
            <Consumer>
                { panelContext => (
                    <div className="badge">
                    <Button variant="secondary">
                        Panels count: <Badge variant="light">{panelContext.panelsLength}</Badge>
                    </Button>
                    </div>
                )}
            </Consumer>
        </div>
    );
}

export default Header;
