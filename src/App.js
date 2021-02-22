import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import LayoutComponent from './components/LayoutComponent';
import Routes from './routes/Routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <LayoutComponent>
                    <Routes />
                </LayoutComponent>
            </BrowserRouter>
        );
    }
}

export default App;
