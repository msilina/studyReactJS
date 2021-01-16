import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './Header';
import Panel from './Panel';
import * as data from './data';

import './App.css';

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

    render() {
        return (
            <div>
                
                <div>
                    <Header 
                        headerText="Щикарный заголовок"> (очень информативный)
                    </Header>
                    <input onClick={ this.disableEditingHandler } type="checkbox" id="showMode" className="checkbox"/>
                    <label htmlFor="showMode" className="checkbox-label">Disable editing</label>
                    { this.renderPanels() }
                </div>
            </div>
        );
    }
}

export default App;
