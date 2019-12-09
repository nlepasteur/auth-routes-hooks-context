import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Admin from './components/Admin'
import LoginContextProvider from './contexts/LoginContext'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import InCaseNoServerProvider from './contexts/InCaseNoServer'
import AdminContextProvider from './contexts/AdminContext'

const App = () => {

  return (
    <InCaseNoServerProvider>
      <LoginContextProvider>
        <Route path='/' component={Navbar} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <AdminContextProvider>
            <Route path='/admin' component={Admin} />
          </AdminContextProvider>
          <Route component={NotFound} /> {/* page 404 not found*/}
        </Switch>
      </LoginContextProvider>
    </InCaseNoServerProvider>
  );
}

export default App;
