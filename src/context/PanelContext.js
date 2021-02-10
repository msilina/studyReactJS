import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from 'lodash';

import * as data from '../data';

const { Provider, Consumer } = React.createContext();

class PanelContextProvider extends Component {
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
        this.scrollToBottom = this.scrollToBottom.bind(this);
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
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
          });
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
        return <Provider
            value={{
                panels: this.state.panels,
                isDisableMode: this.state.isDisableMode,
                onChecked: this.checkedHandler,
                clickDisable: this.disableEditingHandler,
                disabled: isEmpty(this.state.panels),
                clickRemove: this.removePanelHandler,
                clickAddPanel: this.addPanelHandler,
                panelsLength: this.state.panels.length
            }}>
            { this.props.children }
        </Provider>
    }
}

export { PanelContextProvider, Consumer };
