import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import PanelList from './Panels/PanelList';
import ActionsPanel from './ActionsPanel';

class App extends Component {
    render() {
        return (
            <div>
                <Header 
                    headerText="Щикарный заголовок"> (очень информативный)
                </Header>
                <ActionsPanel />
                <PanelList />
                <Footer/>
            </div>
        );
    }
}

export default App;
