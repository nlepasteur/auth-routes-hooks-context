import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

const Login = () => {

  const { user, onChange, onSubmit } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées

  return user.loggedIn ? // ici permet de rediriger user après qu'il ait soumis le formulaire et par extension modifié le state user de 'LoginContext.js'
    (
      <Redirect to='/admin' />
    )
    :
    (
      <div>
        <h1>Login</h1>
        <form onSubmit={onSubmit}> {/*ajouter attributs pour bonne pratique*/}
          <label> Username
          <input type="text" placeholder="username" name="name" value={user.name} onChange={onChange} />
          </label>
          <label> Password
            <input type="text" placeholder="password" name="password" value={user.password} onChange={onChange} />
          </label>
          <input type="submit" />
        </form>
      </div>
    )
}

export default Login