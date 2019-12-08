import React, { useContext, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'
import { InCaseNoServer } from '../contexts/InCaseNoServer'

import '../styles/Admin.css'

const Admin = () => {
  // pour que vous puissiez regarder sans à avoir à mettre en place serveur et data base'
  const { hardCodedData } = useContext(InCaseNoServer)
  // pour que vous puissiez regarder sans à avoir à mettre en place serveur et data base'
  const { user, logOut } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées
  // block qui permet de récuper data depuis serveur
  const [clients, setClients] = useState()
  const [selected, setSelected] = useState()

  useEffect(() => {
    let escape = true
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/clients')
      const data = await response.json()
      if (escape) {
        setClients(data)
      }
    }
    fetchData()
    return () => escape = false
  }, [])

  const getId = (e) => {
    // récupère id et traite pour le setState state selected
    const id = parseInt(e.target.id)
    const selectedClient = clients.filter(client => client.id === id)
    const [first] = selectedClient
    // récupère id et traite pour le setState state selected
    setSelected({
      id: id,
      city: first.city,
      street: first.street,
      postcode: first.postcode
    })
  }

  const getFakeId = (e) => {
    // récupère id et traite pour le setState state selected
    const id = parseInt(e.target.id)
    const selectedClient = hardCodedData.filter(data => data.id === id)
    const [first] = selectedClient
    // récupère id et traite pour le setState state selected
    setSelected({
      id: id,
      city: first.city,
      street: first.street,
      postcode: first.postcode
    })
  }
  console.log('check context hardCodedData : ', { user }, { selected }, { hardCodedData }, { clients })
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