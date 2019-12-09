import React, { useContext } from 'react'

import { Link, Redirect } from 'react-router-dom'
import { AdminContext } from '../contexts/AdminContext'
import { InCaseNoServer } from '../contexts/InCaseNoServer'
import { LoginContext } from '../contexts/LoginContext'


const Admin = () => {
  const { clients, selected, getId } = useContext(AdminContext)
  // pour que vous puissiez regarder sans à avoir à mettre en place serveur et data base'
  const { hardCodedData } = useContext(InCaseNoServer)
  // pour que vous puissiez regarder sans à avoir à mettre en place serveur et data base'
  const { user, logOut } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées

  const renderDetails = () => {
    const dataClients = clients ? clients : hardCodedData
    return (
      <div>
        {dataClients && dataClients.map(client =>
          <div key={client.id} onClick={getId} id={client.id}>
            {client.firstname}
            {client.lastname}
          </div>)}
      </div>
    )
  }

  return !user.loggedIn ?  // ici permet de s'assurer qu'accès à utilisateeur loggé, empêche accès depuis path de la barre de recherche
    (
      <Redirect to='/login' />
    )
    :
    (
      <div>

        <h1>Welcome {user.name} :)</h1>

        {renderDetails()}


        {selected &&
          <div>
            <div>{selected.city}</div>
            <div>{selected.street}</div>
            <div>{selected.postcode}</div>
          </div>
        }


        <Link to='/' onClick={logOut}>Log out</Link>
      </div>

    )
}

export default Admin