import React from 'react'

const ClientsDetails = ({ city, street, postcode }) => {
  return (
    <div>
      <h2>{city}</h2>
      <h2>{street}</h2>
      <h2>{postcode}</h2>
    </div>
  )
}

export default ClientsDetails