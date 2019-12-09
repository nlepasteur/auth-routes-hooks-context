const renderDetails = () => {
  const dataClients = clients ? clients : hardCodedData
  return (
    <div>
      {dataClients && dataClients.map((client) =>
        <div key={client.id} onClick={getId} id={client.id}>
          {client.firstname}
          {client.lastname}
        </div>)}
    </div>
  )
}