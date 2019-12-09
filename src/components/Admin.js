import React, { useContext } from 'react'
// below import routes
import { Link, Redirect } from 'react-router-dom'
// below import contexts
import { AdminContext } from '../contexts/AdminContext'
import { LoginContext } from '../contexts/LoginContext'
import { InCaseNoServer } from '../contexts/InCaseNoServer'
// below import styled-components
import styled from 'styled-components'

const AdminWrapper = styled.div`
padding : 0 3em;
background-color : #ffffff;
min-height : 85vh
overflow : hidden;
`;

const AdminHeader = styled.div`
margin : 2em 0;
color :#9999ff;
font-size : 1rem;
>button{
  margin : 1em 0;
  padding : .5em;
  border-radius : 10px;
  font-size : 1.5rem;
  border : 0;
  background: #9999ff;
  text-decoration : none;

  >:visited{
    color : #ffffff;
  }
}
`

const ListingClients = styled.div`
display : grid;
width : 80%;
margin : 0 auto 2em;
text-align : center;
> div {
  font-size : 2rem;
  margin : .4em 0;
  padding : .2em 0;
  background-color : #F7F7F7;
  color : #adadad;
}

>div:first-child{
  margin-top : 0;
}

>div:last-child{
  margin-bottom : 0;
}

>div:hover {
  background-color : #ccd9ff;
  color : #6b7db3;
}
`;

const DetailsClients = styled.div`
margin-bottom : 2em;
padding : 1.5em;
font-size:1.2rem;
color : #6b7db3;
background :  #e6ecff;
border-radius : 10px;
`;

const Admin = () => {
  const { clients, selected, getId } = useContext(AdminContext)
  const { hardCodedData } = useContext(InCaseNoServer)
  const { user, logOut } = useContext(LoginContext)

  // below called / rendered when selected set 
  const renderDetails = () => {
    const dataClients = clients ? clients : hardCodedData
    return (
      <ListingClients>
        {dataClients && dataClients.map(client =>
          <div key={client.id} onClick={getId} id={client.id}>
            {client.firstname} {client.lastname}
          </div>)}
      </ListingClients>
    )
  }

  return !user.loggedIn ? // prevent access to Admin without login (from searchbar whit /admin path for example)
    (
      <Redirect to='/login' />
    )
    :
    (
      <AdminWrapper>
        <AdminHeader>
          <button><Link to='/' onClick={logOut} style={{ textDecoration: "none" }}>Log out</Link></button>
          <h1>Welcome {user.name} :)</h1>

        </AdminHeader>


        {renderDetails()}

        {
          selected &&
          <DetailsClients>
            <div>City : {selected.city}</div>
            Address :
            <div>Street : {selected.street}</div>
            <div>Postcode : {selected.postcode}</div>
          </DetailsClients>
        }
      </AdminWrapper>
    )
}

export default Admin