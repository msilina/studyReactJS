import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Panel from './Panel/Panel';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header headerText="Щикарный заголовок"> (очень информативный)</Header>
        </div>
        <div className="panel">
          <Panel caption="Чтототам" text="Какая-то важная ерунда про что-то там"/>
        </div>
      </div>

    );
  }
}

export default App;
