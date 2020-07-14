import React                 from 'react';
import { Route, Switch }     from 'react-router-dom'
import UserRegister          from './components/userRegister/UserRegister'
import UserLogin             from './components/userLogin/UserLogin';
import UserDashboard         from './pages/UserDashboard';
import TestSecretsRoute      from './pages/TestSecretsRoute';
import withAuth              from './utility/withAuth';
import ErrorBoundary         from './components/error/ErrorBoudary';
import DynamicComponent      from './components/DynamicComponent/DynamicComponent'
import Navbar                from './components/navbar/Navbar'

import './App.scss';


function App() {

  const location = window.location.pathname
  const NavbarLocation = location === '/login' || location === '/register'  ? null : <Navbar />

  return <Route>
            {/* <ErrorBoundary> */}
            <ErrorBoundary>
            

            {NavbarLocation}
            <Switch>
            {/* PROTECTED Routes */}
            <Route exact path="/"             component={withAuth( UserDashboard, '/' )} />
            <Route exact path="/secrets"      component={withAuth( TestSecretsRoute, '/' )} />
    
            {/* DYNAMIC Route */}
            <Route exact path="/newboard/:id" component={DynamicComponent} />

            {/* UNPROTECTED Routes */}
            <Route exact path="/register"     component={UserRegister} />
            <Route exact path="/login"        component={UserLogin} />
            </Switch>
  

          
            </ErrorBoundary>
            {/* </ErrorBoundary> */}
    </Route>
  
  
}

export default App;
