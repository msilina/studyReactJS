import React, { Component } from 'react';
import Header from './Header';
import Panel from './Panel';
import * as data from './data';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            panels: data.panels,
            isDisableMode: false
        };

        this.disableEditingHandler = this.disableEditingHandler.bind(this);
    }
    
    disableEditingHandler() {
        this.setState({
            isDisableMode: !this.state.isDisableMode
        })
    }

    renderPanels = () => (
      <div className="container">
          <div className="row">
                {this.state.panels.map(panel => {
                    return (
                        <div className="col-sm-12 col-lg-6"> 
                            <Panel
                            //я добавила уникальное поле, чтобы использовать его в кач-ве key, но, почему-то, все равно вижу warning в консоли
                                key={ panel.id }
                                caption={ panel.caption }
                                text={ panel.text }
                                isDisableMode={ this.state.isDisableMode }
                                />
                        </div>);
                    })
                }
          </div>
      </div>
    );

    render() {
        return (
            <div>
                
                <div>
                    <Header 
                        headerText="Щикарный заголовок"> (очень информативный)
                    </Header>
                    <input onClick={ this.disableEditingHandler } type="checkbox" id="showMode" className="checkbox"/>
                    <label htmlFor="showMode" className="checkbox-label">Disable editing</label>
                    { this.renderPanels() }
                </div>
            </div>
        );
    }
}

export default App;
