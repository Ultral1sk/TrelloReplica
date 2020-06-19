import React                             from 'react';
import { Switch, Route,  BrowserRouter } from 'react-router-dom'
import UserLogin                         from './src/components/userLogin/UserLogin'
import UserRegister                      from './src/components/userRegister/UserRegister'
import UserDashboard                     from './src/pages/UserDashboard'
import './App.scss';

function App() {

  

  return (
    <BrowserRouter >
        <Switch>
          <Route exact path="/" component={UserRegister} />
          <Route exact path="/login" component={UserLogin} />
          <Route exact path="/userdashboard" component={UserDashboard} />
        </Switch>
    </BrowserRouter>


  );
}

export default App;
