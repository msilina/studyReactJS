import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import Header from './Header';
import Footer from './Footer';
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
        this.bottom = React.createRef();

        this.disableEditingHandler = this.disableEditingHandler.bind(this);
        this.removePanelHandler = this.removePanelHandler.bind(this);
        this.checkedHandler = this.checkedHandler.bind(this);
        this.addPanelHandler = this.addPanelHandler.bind(this);
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
    scrollToBottom() {
        this.bottom.current.scrollIntoView({ behavior: 'smooth' });
    }

    addPanelHandler() {
        let panels = [...this.state.panels, {
            id: uuidv4(),
            caption: 'Default caption',
            text: 'Default text'
        }];
        this.setState({
            panels: panels
        });
        this.scrollToBottom();
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
                    clickAddPanel={ this.addPanelHandler}
                />
                <PanelList
                    panels={ this.state.panels }
                    isDisableMode={ this.state.isDisableMode}
                    onChecked={ this.checkedHandler }
                />
                <Footer footerRef={ this.bottom } />
            </div>
        );
    }
}

export default App;
