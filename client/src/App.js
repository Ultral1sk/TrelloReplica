import React                             from 'react';
import { Route }        from 'react-router-dom'
import UserRegister                      from './components/userRegister/UserRegister'
import UserLogin                         from './components/userLogin/UserLogin'
import UserDashboard                     from './pages/UserDashboard'
import Secrets                           from './pages/Secrets'
import withAuth                          from './utility/withAuth';
import './App.scss';

function App() {

  return (
    <Route>
        {/* PROTECTED Routes */}
        <Route exact path="/"         component={withAuth( UserDashboard, '/' )} />
        <Route exact path="/secrets"  component={withAuth( Secrets, '/' )} />




        {/* UNPROTECTED Routes */}
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/login"    component={UserLogin} />
    </Route>
  );
}

export default App;
