import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

const Login = () => {

  const { user, onChange, onSubmit } = useContext(LoginContext)

  return user.loggedIn ? // ici permet de s'assurer qu'accès à utilisateeur loggé, empêche accès depuis path de la barre de recherche
    (
      <Redirect to='/admin' />
    )
    :
    (
      <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="username" name="name" value={user.name} onChange={onChange} />
          <input type="text" placeholder="password" name="password" value={user.password} onChange={onChange} />
          <input type="submit" />
        </form>
      </div>
    )
}

export default Login