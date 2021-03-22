import React from 'react';
import { Button } from 'react-bootstrap';

import { DataContainer, CheckboxLabel, CheckboxInput, CheckboxContainer } from '../StyledComponent';

const ActionsPanel = (props) => (
    <DataContainer>
        <Button variant="secondary" block
            onClick={ props.onAdd }>
            Add new panel
        </Button>
        <Button variant="secondary" block
            onClick={ props.onRemove }>
            Remove selected panels
        </Button>
        <CheckboxContainer>
            <CheckboxLabel isDisableMode={ props.isDisableMode }>
                <CheckboxInput onClick={ props.clickDisable }/>
                <span>Disable editing</span>
            </CheckboxLabel>
        </CheckboxContainer>
    </DataContainer>
);

export default ActionsPanel;
