import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty, isUndefined } from 'lodash';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const { Provider, Consumer } = React.createContext();

class PanelContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            panels: [],
            isDisableMode: false,
            error: []
        };
        this.bottom = React.createRef();

        this.disableEditingHandler = this.disableEditingHandler.bind(this);
        this.removePanelHandler = this.removePanelHandler.bind(this);
        this.checkedHandler = this.checkedHandler.bind(this);
        this.addPanelHandler = this.addPanelHandler.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    checkedToRemove = [];

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
            .then(response => {
                this.setState({
                    panels: response.data.slice(0, 15).map(panel => ({
                        id: uuidv4(),
                        caption: panel.Name,
                        text: panel.About,
                    }))
                });
            }).catch(error => {
                this.setState({
                    error: error.response
                })
            });
    }
    
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
                panelsLength: this.state.panels.length,
                error: this.state.error
            }}>
            { this.props.children }
        </Provider>
    }
}

export { PanelContextProvider, Consumer };
