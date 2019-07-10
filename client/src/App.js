import React from 'react';
import Nav from './Nav';
import Home from './Home';
import History from './History';
import Categories from './Decks/Categories';
import CreateDeck from './Add/CreateDeck';
import AddOption from './Add/AddOption';
import DeckList from './Decks/DeckList';
import DeckDetail from './Decks/DeckDetail';

// User Components
import UserForm from './User';
import ProtectedRoute from './User/ProtectedRoute'

import {Switch, Route, Link} from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <div id='main-container'>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <ProtectedRoute path='/history' component={History} />
        <ProtectedRoute exact path='/category' component={Categories} />
        <ProtectedRoute exact path='/category/:categoryName' component={DeckList} />
        <ProtectedRoute exact path='/category/:categoryName/:_id' component={DeckDetail} />
        <ProtectedRoute path='/addDeck' component={CreateDeck} />
        <ProtectedRoute path='/addOption' component={AddOption} />
        <Route path='/login' component={() => <UserForm type='login' />} />
        <Route path='/signup' component={() => <UserForm type='signup' />} />

      </Switch>
    </div>
  );
};

export default App;