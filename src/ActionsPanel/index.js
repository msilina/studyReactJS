import React from 'react';

import { Button } from 'react-bootstrap';
import { ButtonsContainer, CheckboxLabel, CheckboxInput, CheckboxContainer } from '../StyledComponent';

const ActionsPanel = (props) => (
    <ButtonsContainer>
        <Button variant="secondary" block
            onClick={ props.clickAddPanel }>
            Add new panel
        </Button>
        <Button variant="secondary" block
            disabled={ props.disabled }
            onClick={ props.clickRemove }>
            Remove selected panels
        </Button>
        <CheckboxContainer>
            <CheckboxLabel isDisableMode={ props.isDisableMode }>
                <CheckboxInput onClick={ props.clickDisable }/>
                <span>Disable editing</span>
            </CheckboxLabel>
        </CheckboxContainer>
    </ButtonsContainer>
)

export default ActionsPanel;
