import React from 'react';
import './Panel.css';

const panel = (props) => {
    return (
        <div className="text">
            <h2>{ props.caption }</h2>
            <hr/>
            <p>{ props.text }</p>
        </div>
    );
}

export default panel;
