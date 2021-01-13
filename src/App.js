import React, { Component } from 'react';
import Header from './Header';
import Panel from './Panel';

class App extends Component {
    render() {
        return (
            <div>
                <Header 
                    headerText="Щикарный заголовок"> (очень информативный)
                </Header>
                <Panel/>
            </div>
        );
    }
}

export default App;
