import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import Header from './Header';
import PanelList from './Panels/PanelList';
import ActionsPanel from './ActionsPanel';
import * as data from './data';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            panels: data.panels,
            isDisableMode: false,
        };

        this.disableEditingHandler = this.disableEditingHandler.bind(this);
        this.removePanelHandler = this.removePanelHandler.bind(this);
        this.checkedHandler = this.checkedHandler.bind(this);
    }

    checkedToRemove = [];
    
    disableEditingHandler() {
        this.setState({
            isDisableMode: !this.state.isDisableMode
        })
    }

    removePanelHandler() {
        const panels = [...this.state.panels];
        this.setState({
            panels: panels.filter(panel => !this.checkedToRemove.includes(panel.id)),
        });

    }

    checkedHandler(id, checked) {
        return checked ? this.checkedToRemove.push(id) :
            this.checkedToRemove = this.checkedToRemove.filter(panelId => panelId !== id);
    }

    render() {
        return (
            <div>
                <Header 
                    headerText="Щикарный заголовок"> (очень информативный)
                </Header>
                <ActionsPanel
                    isDisableMode={ this.state.isDisableMode }
                    clickDisable={ this.disableEditingHandler }
                    disabled={ isEmpty(this.state.panels) }
                    clickRemove={ this.removePanelHandler }
                />
                <PanelList
                    panels={ this.state.panels }
                    isDisableMode={ this.state.isDisableMode}
                    onChecked={ this.checkedHandler }
                />
            </div>
        );
    }
}

export default App;
