import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Panel from '../Panel';

const PanelList = (props) => (
    <Container>
        <Row>
            { props.panels.map(panel => (
                <Col sm={ 12 } lg={ 6 } key={ panel.id }> 
                    <Panel
                        caption={ panel.caption }
                        text={ panel.text }
                        id={ panel.id }
                        isDisableMode={ props.isDisableMode }
                        onChecked={ props.onChecked }
                    />
                </Col>
            ))}
        </Row>
    </Container>
)

export default PanelList;
