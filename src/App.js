import React, { Component } from 'react';
import './App.css';
import { FrontSide } from './FrontSide';
import { Backside } from './Backside';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className='card-body'>
          <FrontSide/>
          <Backside/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
