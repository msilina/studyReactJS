import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import Panel from './Panel';
import * as data from './data';
import { CheckboxContainer, CheckboxLabel, CheckboxInput } from './StyledComponent';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            panels: data.panels,
            isDisableMode: false
        };

        this.disableEditingHandler = this.disableEditingHandler.bind(this);
    }
    
    disableEditingHandler() {
        this.setState({
            isDisableMode: !this.state.isDisableMode
        })
    }

    renderPanels() {
        return  (
            <Container>
                <Row>
                    {this.state.panels.map(panel => {
                        return (
                            <Col sm={ 12 } lg={ 6 } key={ panel.id }> 
                                <Panel
                                    caption={ panel.caption }
                                    text={ panel.text }
                                    isDisableMode={ this.state.isDisableMode }
                                    />
                            </Col>);
                        })
                    }
                </Row>
            </Container>
        );
    }

    renderDisableEditingCheckbox() {
        return (
            <CheckboxContainer>
                <CheckboxLabel isDisableMode={ this.state.isDisableMode }>
                    <CheckboxInput onClick={ this.disableEditingHandler }/>
                    <span>Disable editing</span>
                </CheckboxLabel>
            </CheckboxContainer>
        );
    }

    render() {
        return (
            <div>
                <Header 
                    headerText="Щикарный заголовок"> (очень информативный)
                </Header>
                { this.renderDisableEditingCheckbox() }
                { this.renderPanels() }
            </div>
        );
    }
}

export default App;
