import React, { useContext, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext'

const Admin = () => {
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
    console.log('target id : ', e.target.id)
    const id = parseInt(e.target.id)
    console.log('typeof de target check : ', typeof test)

    const selectedClient = clients.filter(client => client.id === id)
    const [first] = selectedClient

    // test //////////////////////////////////////////////////
    console.log('test de destructuration : ', first)
    console.log('ici vérifie si fonctionne que lobjet soit entier : ', selectedClient)
    // test //////////////////////////////////////////////////

    setSelected({
      id: id,
      city: first.city,
      street: first.street,
      postcode: first.postcode
    })
  }

  // a enlever apres
  if (clients) {
    console.log(clients[5].city)
  }
  console.log('check selected si bien pris en compte', selected) // check structure
  // a enlever apres


  return !user.loggedIn ?  // ici permet de s'assurer qu'accès à utilisateeur loggé, empêche accès depuis path de la barre de recherche
    (
      <Redirect to='/login' />
    )
    :
    (
      <div>

        <h1>Welcome {user.name} :)</h1>

        {clients && clients.map((client) => (
          <div key={client.id} onClick={getId} id={client.id}>
            {client.firstname}
            {client.lastname}
          </div>
        ))}

        <div>
          ici seront les détails
          {selected && <div>{selected.city} {selected.street} {selected.postcode}</div>}
        </div>

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

  // {clients && clients.map((client) => (
  //   <div key={client.id} {...client} id={client.id} />
  // ))}

  // {clients && clients.map((client, index) => (
  //         <div key={client.id} onClick={getId} id={client.id}>
  //           {client.firstname}
  //           {client.lastname}
  //         </div>
  //       ))}