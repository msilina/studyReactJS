import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import Panel from '../Panel';
import { Consumer } from '../../context/PanelContext';

const PanelList = () => (
    <Consumer>
        { panelContext => (
            <Container>
                <Row>
                    { isEmpty(panelContext.error)  ?
                        panelContext.panels.map(panel => (
                        <Col sm={ 12 } lg={ 6 } key={ panel.id }> 
                            <Panel
                                caption={ panel.caption }
                                text={ panel.text }
                                id={ panel.id }
                                isDisableMode={ panelContext.isDisableMode }
                                onChecked={ panelContext.onChecked }
                            />
                        </Col>
                    )) : 
                    <Alert variant="danger">
                        <Alert.Heading>Something went wrong :(</Alert.Heading>
                        <p> An error occurred while executing the request ('{ panelContext.error.config.url }') - <b>{ panelContext.error.data }</b></p>
                    </Alert>
                    }
                    </Row>
                </Container>
        )}
    </Consumer>

);

export default PanelList;
