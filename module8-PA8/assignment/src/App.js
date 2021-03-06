import React, { Component } from 'react';
import {  HashRouter as Router, Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import Contacts from "./Components/Contacts/Contacts"
import './App.css';
import Header from './Components/layout/Header';
import AddContact from './Components/Contacts/AddContact'
import EditContact from './Components/Contacts/EditContact'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Provider }from './Context';
import notfound from './Components/pages/notfound'
import { Provider } from 'react-redux';
import store from './store';
import About from './Components/pages/About'
import Test from './Components/Test/Test'

class App extends Component {
  render() {
    return (
      <Provider store = {store} >
        <Router>
          <div className="App">
            <Header branding = "Contact Manager"/>
            <div className="container">
             <Switch>
               <Route exact path = "/" component = {Contacts}/>
               <Route exact path = "/contact/add" component = { AddContact }/>
               <Route exact path = "/contact/edit/:id" component = { EditContact }/>
               <Route exact path = "/about" component = { About }/>
               <Route exact path = "/test" component = { Test }/>
               <Route component = { notfound }/>
               
             </Switch>
            </div>          
          </div>
        </Router>   
      </Provider>   
    );
  }
  
}

export default App;
