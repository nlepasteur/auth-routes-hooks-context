import React from 'react'
import { Link } from 'react-router-dom'

const ClientsTable = ({ firstname, lastname, showDetails }) => {

  return (
    <Link>
      <h2>{firstname}</h2>
      <h2>{lastname}</h2>
    </Link>
  )
}

export default ClientsTable

