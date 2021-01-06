import React from 'react';
import './Panel.css';

const Panel = (props) => {
    return (
        <div className="panel-list">
            <div className="panel">
                <h2>{ props.caption }</h2>
                <hr/>
                <p>{ props.text }</p>
            </div>
        </div>
    );
}

export default Panel;
