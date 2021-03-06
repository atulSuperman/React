import React from 'react';
import logo from './logo.svg';
import Contacts from "./Components/Contacts"
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
      <Header branding = "Contact Manager"/>
      <div className="container">
        <Contacts/>
      </div>
      
    </div>
  );
}

export default App;
