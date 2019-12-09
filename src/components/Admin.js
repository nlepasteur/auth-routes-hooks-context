import React, { useContext } from 'react'
// below import routes
import { Link, Redirect } from 'react-router-dom'
// below import contexts
import { AdminContext } from '../contexts/AdminContext'
import { LoginContext } from '../contexts/LoginContext'
import { InCaseNoServer } from '../contexts/InCaseNoServer'

const Admin = () => {
  const { clients, selected, getId } = useContext(AdminContext)
  const { hardCodedData } = useContext(InCaseNoServer)
  const { user, logOut } = useContext(LoginContext)

  // below called / rendered when selected set 
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

  return !user.loggedIn ? // prevent access to Admin without login (from searchbar whit /admin path for example)
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