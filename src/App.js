import React from 'react';
import {Provider} from 'react-redux'
import store from './app/store'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div id="App" className="App">
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
