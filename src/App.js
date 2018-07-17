import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './components/List';
import InputBox from './components/InputBox';
import './app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <InputBox />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
