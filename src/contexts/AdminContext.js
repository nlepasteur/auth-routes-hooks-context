import React, { useState, useEffect, createContext, useContext } from 'react'
// below import contexts
import { InCaseNoServer } from './InCaseNoServer'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {

  // below destructure states and contexts, assign them to a variable
  const { hardCodedData } = useContext(InCaseNoServer)
  const [clients, setClients] = useState()
  const [selected, setSelected] = useState()

  // below fetch data from database or json hardcoded data
  useEffect(() => {
    let escape = true
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/clients') // ICI 
      const data = await response.json()
      if (escape) {
        setClients(data)
      }
    }
    fetchData()
    return () => escape = false
  }, [])

  // below provide to setSelected to render clients'details
  const getId = (e) => {
    const dataClients = clients ? clients : hardCodedData
    // below catch id of the targetted element and treat it
    const id = parseInt(e.target.id)
    const selectedClient = dataClients.filter(client => client.id === id)
    const [first] = selectedClient
    setSelected({
      id: id,
      city: first.city,
      street: first.street,
      postcode: first.postcode
    })
  }

  return (
    <AdminContext.Provider value={{ clients, selected, getId }}>
      {props.children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider