import React from 'react';
import { Skeleton } from '@material-ui/lab';

import './Panel.css';

const PanelBody = (props) => (
    !props.loading
        ? ( props.editing
            ? <textarea ref={ props.textRef } defaultValue={ props.text } className="text" maxLength='250'></textarea>
            : <div className="hide-long-text text"> 
                { props.text }
            </div>
        )
        : <Skeleton
            animation="wave"
            height={137}
        />
);

export default PanelBody;
