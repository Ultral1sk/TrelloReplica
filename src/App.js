import React, { useState, Fragment } from 'react';
import { Link, Switch, Route,  BrowserRouter } from 'react-router-dom'
import UserLogin from './components/UserSignIN/UserLogin'
import UserRegister from './components/UserSignUP/UserRegister'

import UserDashboard from './pages/UserDashboard'
import './App.scss';

function App() {


  return (
    <BrowserRouter >
        <Switch>
        <Route  exact path="/" component={UserRegister} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/userdashboard" component={UserDashboard} />
        </Switch>
    </BrowserRouter>


  );
}

export default App;
