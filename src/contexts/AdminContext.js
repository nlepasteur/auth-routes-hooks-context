import React, { useContext, useState, useEffect, createContext } from 'react'
import { LoginContext } from './LoginContext'
import { InCaseNoServer } from './InCaseNoServer'

export const AdminContext = createContext()


const AdminContextProvider = (props) => {
  // block qui permet de récuper data depuis serveur
  const { hardCodedData } = useContext(InCaseNoServer)

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
    const dataClients = clients ? clients : hardCodedData
    // récupère id et traite pour le setState state selected
    const id = parseInt(e.target.id)
    const selectedClient = dataClients.filter(client => client.id === id)
    const [first] = selectedClient
    console.log('ici details a recuperer : ', first)
    // récupère id et traite pour le setState state selected
    setSelected({
      id: id,
      city: first.city,
      street: first.street,
      postcode: first.postcode
    })
  }

  // const getFakeId = (e) => {
  //   // récupère id et traite pour le setState state selected
  //   const id = parseInt(e.target.id)
  //   const selectedClient = hardCodedData.filter(data => data.id === id)
  //   const [first] = selectedClient
  //   // récupère id et traite pour le setState state selected
  //   setSelected({
  //     id: id,
  //     city: first.city,
  //     street: first.street,
  //     postcode: first.postcode
  //   })
  // }
  console.log('selected check : ', selected)
  return (
    <AdminContext.Provider value={{ clients, selected, getId }}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider