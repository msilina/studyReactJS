import React from 'react';

import './Input.css';

const Input = (props) => {
    let inputElement = null;

    switch(props.inputtype) {
        case 'textarea':
            inputElement = <textarea
                { ...props }
            />;
            break;
        default:
            inputElement = <input
                { ...props }
            />;
    }

    return (
        <div >
            <label className="label">{ props.label }</label>
            { inputElement }
            { props.error && <span className='error'>{props.error}</span> }
        </div>
    )
}

export default Input;
