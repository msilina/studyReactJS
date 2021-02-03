import React from 'react';

import { Button } from 'react-bootstrap';
import { Container, CheckboxLabel, CheckboxInput, CheckboxContainer } from '../StyledComponent';

const ActionsPanel = (props) => (
    <Container>
        <Button variant="secondary" size="lg" block
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
    </Container>
)

export default ActionsPanel;
