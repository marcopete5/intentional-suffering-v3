import React from 'react';
import Nav from './Nav';
import Home from './Home';
import History from './History';
import Categories from './Decks/Categories';
import CreateDeck from './Add/CreateDeck';
import DeckList from './Decks/DeckList';

// User Components
import UserForm from './User';
import ProtectedRoute from './User/ProtectedRoute'

import {Switch, Route, Link} from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div id='main-container'>
      <div id='title'><Link to='/' style={{textDecoration: "none", color: 'black'}}>Wheel of Suck</Link></div>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute path='/history' component={History} />
        <ProtectedRoute exact path='/category' component={Categories} />
        <ProtectedRoute path='/category/:categoryName' component={DeckList} />
        <ProtectedRoute path='/add' component={CreateDeck} />
        <Route path='/login' component={() => <UserForm type='login' />} />
        <Route path='/signup' component={() => <UserForm type='signup' />} />

      </Switch>
    </div>
  );
};

export default App;