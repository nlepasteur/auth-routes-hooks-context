import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Admin from './components/Admin'
import LoginContextProvider from './contexts/LoginContext'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <LoginContextProvider>
      <Route path='/' component={Navbar} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Route component={NotFound} /> {/* page 404 not found*/}
      </Switch>
    </LoginContextProvider>
  );
}

export default App;
