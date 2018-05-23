import React, { Component } from 'react';
import Header from './components/Header/Header';
import TransactionContainer from './containers/Transaction/TransactionContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TransactionContainer />
      </div>
    );
  }
}

export default App;
