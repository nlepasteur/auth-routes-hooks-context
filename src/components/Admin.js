import React, { useContext } from 'react'

import { Link, Redirect } from 'react-router-dom'
import { AdminContext } from '../contexts/AdminContext'
import { InCaseNoServer } from '../contexts/InCaseNoServer'
import { LoginContext } from '../contexts/LoginContext'


const Admin = () => {
  const { clients, selected, getFakeId, getId } = useContext(AdminContext)
  // pour que vous puissiez regarder sans à avoir à mettre en place serveur et data base'
  const { hardCodedData } = useContext(InCaseNoServer)
  // pour que vous puissiez regarder sans à avoir à mettre en place serveur et data base'
  const { user, logOut } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées
  return !user.loggedIn ?  // ici permet de s'assurer qu'accès à utilisateeur loggé, empêche accès depuis path de la barre de recherche
    (
      <Redirect to='/login' />
    )
    :
    clients ?
      (
        <div className='className-achanger'>

          <h1>Welcome {user.name} :)</h1>

          {clients && clients.map((client) => (
            <div key={client.id} onClick={getId} id={client.id}>
              {client.firstname}
              {client.lastname}
            </div>
          ))}

          <div>
            {selected && <div>{selected.city} {selected.street} {selected.postcode}</div>}
          </div>

          <Link to='/' onClick={logOut}>Log out</Link>
        </div>
      ) :
      (
        <div className='className-achanger'>
          <h1>Welcome {user.name} :)</h1>
          {hardCodedData && hardCodedData.map(data => (
            <div key={data.id} onClick={getFakeId} id={data.id}>
              {data.city}
              {data.street}
              {data.postcode}
            </div>
          ))}
          <div>
            {selected && <div>{selected.city} {selected.street} {selected.postcode}</div>}
          </div>
          <Link to='/' onClick={logOut}>Log out</Link>
        </div>
      )
}

export default Admin