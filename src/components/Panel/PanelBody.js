import React from 'react';
import withLoadingDelay from '../../hoc/withLoadingDelay';

import './Panel.css';

const PanelBody = (props) => (
    props.editing ? <textarea ref={ props.textRef } defaultValue={ props.text } className="text" maxLength='250'></textarea>
        : (
            <div className="hide-long-text text"> 
                { props.text }
            </div>
        )
);

const height = 137;

export default withLoadingDelay(PanelBody, height);
