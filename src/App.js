import React, { Component } from 'react';
import Header from './components/Header/Header';
import TransactionContainer from './containers/Transaction/TransactionContainer';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <TransactionContainer />
      </main>
    );
  }
}

export default App;
