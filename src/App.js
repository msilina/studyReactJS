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
            checked: data.panels.map(
                panel => ({
                    id: panel.id,
                    checked: false,
                })
            )
        };

        this.disableEditingHandler = this.disableEditingHandler.bind(this);
        this.removePanelHandler = this.removePanelHandler.bind(this);
    }
    
    disableEditingHandler() {
        this.setState({
            isDisableMode: !this.state.isDisableMode
        })
    }

    removePanelHandler() {
        const panels = [...this.state.panels];
        const checked = [...this.state.checked];
        this.setState({
            panels: panels.filter(panel => this.state.checked.some(p => panel.id === p.id && !p.checked)),
            checked: checked.filter(c => c.checked === false),
        });

    }

    render() {
        return (
            <div>
                <Header 
                    headerText="Щикарный заголовок"> (очень информативный)
                </Header>
                <ActionsPanel
                    isDisableMode={ this.state.isDisableMode }
                    clickDisable={() => this.disableEditingHandler() }
                    disabled={ isEmpty(this.state.panels) }
                    clickRemove={ () => this.removePanelHandler() }
                />
                <PanelList
                    panels={ this.state.panels }
                    isDisableMode={ this.state.isDisableMode}
                    checked={ this.state.checked }
                />
            </div>
        );
    }
}

export default App;
