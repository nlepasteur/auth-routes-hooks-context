import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

const Admin = () => {
  const { user, logOut } = useContext(LoginContext)
  return !user.loggedIn ?
    (
      <Redirect to='/login' />
    )
    :
    (
      <div>
        <h1>Welcome {user.name} :)</h1>
        <Link to='/' onClick={logOut}>Log out</Link>
      </div>
    )
}

export default Admin
