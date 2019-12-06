import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Admin from './components/Admin'
import LoginContextProvider from './contexts/LoginContext'
import Logout from './components/Logout'
import Login from './components/Login'
import NotFound from './components/NotFound'

const App = () => {

  return (
    <LoginContextProvider>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route exact path='/' component={Logout} />
        <Route component={NotFound} />
      </Switch>
    </LoginContextProvider>
  );
}

export default App;
