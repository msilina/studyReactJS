import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Panel from './Panel';

class App extends Component {
  render() {
    return (
      <div>
        <Header headerText="Щикарный заголовок"> (очень информативный)</Header>
        <Panel caption="Чтототам" text="Какая-то важная ерунда про что-то там"/>
      </div>
    );
  }
}

export default App;
