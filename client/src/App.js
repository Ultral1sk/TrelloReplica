import React, {useState}     from 'react';
import { Route, useHistory, Switch } from 'react-router-dom'
import UserRegister          from './components/userRegister/UserRegister'
import UserLogin             from './components/userLogin/UserLogin';
import UserDashboard         from './pages/UserDashboard';
import TestSecretsRoute      from './pages/TestSecretsRoute';
import withAuth              from './utility/withAuth';
import Navbar                from './components/navbar/Navbar';
import ErrorBoundary         from './components/error/ErrorBoudary';
import './App.scss';

function App() {
 
  return <Route>
            <ErrorBoundary>

            <Navbar />
      
            {/* PROTECTED Routes */}
            <Route exact path="/"         component={withAuth( UserDashboard, '/' )} />
            <Route exact path="/secrets"  component={withAuth( TestSecretsRoute, '/' )} />

            {/* UNPROTECTED Routes */}
            <Route exact path="/register" component={UserRegister} />
            <Route exact path="/login"    component={UserLogin} />
        
            </ErrorBoundary>
    </Route>
  
  
}

export default App;
