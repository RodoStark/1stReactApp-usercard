import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/cardApp.css';
import Usercard from './components/Usercard';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "cardApp-container">       
        <Usercard/>
        </div>
        <div className ="container">
          <div className ="row mt-4 ">
          <Users/>          
          </div>
        </div>
      </div>    
      
    );
  }
}

export default App;
