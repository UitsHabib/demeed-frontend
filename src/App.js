import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SignUpSeller from './components/SellerSignUpForm';
import Welcome from './components/Welcome';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Welcome />}></Route>
          <Route path = 'sellersignup' element = {<SignUpSeller />}></Route>
          
          </Routes>
      </div>
    );
  }
}

export default App;

