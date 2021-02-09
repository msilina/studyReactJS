import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Panel from '../Panel';
import { Consumer } from '../context/PanelContext';

const PanelList = () => (
    <Container>
        <Row>
            <Consumer>
                { panelContext => (
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
                    )) 
                )}
            </Consumer>
        </Row>
    </Container>
);

export default PanelList;
