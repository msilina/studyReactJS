import React from 'react';

const header = (props) => {
    return (
        <div>
            <h1>{ props.headerText }</h1>
            <em>{ props.children }</em>
        </div>
    );
}

export default header;
