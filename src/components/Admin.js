import React, { useContext, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'
import ClientsTable from './ClientsTable'

const Admin = () => {
  const { user, logOut } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées
  // block qui permet de récuper data depuis serveur
  const [clients, setClients] = useState()

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

  return !user.loggedIn ?  // ici permet de s'assurer qu'accès à utilisateeur loggé, empêche accès depuis path de la barre de recherche
    (
      <Redirect to='/login' />
    )
    :
    (
      <div>

        <h1>Welcome {user.name} :)</h1>

        {clients && clients.map((client) => <ClientsTable key={client.id} {...client} />)}

        <Link to='/' onClick={logOut}>Log out</Link>
      </div>
    )
}

export default Admin

  // useEffect(() => {
  //   let isSuscribed = true
  //   fetch('http://localhost:3000/clients')
  //     .then(response => response.json())
  //     .then(response => {
  //       if (isSuscribed) {
  //         setClients(response)
  //       }
  //     })
  //   return () => isSuscribed = false
  // }, [])