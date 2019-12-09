import React from 'react';
// below import routes
import { Route, Switch } from 'react-router-dom'
// below import contexts
import LoginContextProvider from './contexts/LoginContext'
import AdminContextProvider from './contexts/AdminContext'
import InCaseNoServerProvider from './contexts/InCaseNoServer'
// below import components
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Admin from './components/Admin'
import NotFound from './components/NotFound'

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
