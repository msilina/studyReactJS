import React from 'react';

import { Button } from 'react-bootstrap';
import { ButtonsContainer, CheckboxLabel, CheckboxInput, CheckboxContainer } from '../StyledComponent';

import { Consumer } from '../context/PanelContext';

const ActionsPanel = () => (
    <Consumer>
        { panelContext => (
        <ButtonsContainer>
            <Button variant="secondary" block
                onClick={ panelContext.clickAddPanel }>
                Add new panel
            </Button>
            <Button variant="secondary" block
                disabled={ panelContext.disabled }
                onClick={ panelContext.clickRemove }>
                Remove selected panels
            </Button>
            <CheckboxContainer>
                <CheckboxLabel isDisableMode={ panelContext.isDisableMode }>
                    <CheckboxInput onClick={ panelContext.clickDisable }/>
                    <span>Disable editing</span>
                </CheckboxLabel>
            </CheckboxContainer>
        </ButtonsContainer>
        )}
    </Consumer>
)

export default ActionsPanel;
