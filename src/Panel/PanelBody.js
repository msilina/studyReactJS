import React from 'react';

import './Panel.css';

const PanelBody = (props) => (
    props.editing ? <textarea ref={ props.textRef } defaultValue={ props.text } className="text" maxLength='250'></textarea>
        : (
            <div className="hide-long-text text"> 
                { props.text }
            </div>
        )
);

export default PanelBody;
