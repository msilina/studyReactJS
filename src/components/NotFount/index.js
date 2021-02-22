import React from 'react';
import { Alert } from 'react-bootstrap';

import './NotFound.css';

const NotFound = () => (
    <div className="notfound-alert">
        <Alert variant="warning">
            <Alert.Heading>Something went wrong :(</Alert.Heading>
            <p>404 Sorry, we can't find this page</p>
        </Alert>
    </div>
);

export default NotFound;