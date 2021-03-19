import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { isEmpty } from 'lodash';

import Panel from '../Panel';

const PanelList = (props) => (
    <Container>
        <Row>
            { isEmpty(props.error)
                ? props.panels.map(panel => (
                    <Col sm={ 12 } lg={ 6 } key={ panel.id }> 
                        <Panel
                            caption={ panel.caption }
                            text={ panel.text }
                            id={ panel.id }
                            isDisableMode={ props.isDisableMode }
                            onChecked={ props.onChecked }
                            loading={ props.loading }
                        />
                    </Col>))
                : <Alert variant="danger">
                    <Alert.Heading>Something went wrong :(</Alert.Heading>
                    <p> An error occurred while executing the request ('{ props.error.config.url }') - <b>{ props.error.data }</b></p>
                </Alert>
            }
        </Row>
    </Container>
);

export default PanelList;
