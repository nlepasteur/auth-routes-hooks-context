import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

const Admin = () => {
  const { user, logOut } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées
  return !user.loggedIn ?  // ici permet de s'assurer qu'accès à utilisateeur loggé, empêche accès depuis path de la barre de recherche
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
