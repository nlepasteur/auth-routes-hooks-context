import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
// below import contexts
import { LoginContext } from '../contexts/LoginContext'
// below import styled-components
import styled from 'styled-components'

const FormWrapper = styled.div`
background-color : yellow;
height : 90vh;
`

const Login = () => {

  const { user, handleChange, handleSubmit } = useContext(LoginContext) // context provided par 'LoginContext.js', propriétés et fonctions utilisées par ce composant qui y sont rattachées, y sont expliquées

  return user.loggedIn ? // ici permet de rediriger user après qu'il ait soumis le formulaire et par extension modifié le state user de 'LoginContext.js'
    (
      <Redirect to='/admin' />
    )
    :
    (
      <FormWrapper>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label> Username
          <input type="text" name="name" value={user.name} onChange={handleChange} />
          </label>
          <label> Password
            <input type="text" name="password" value={user.password} onChange={handleChange} />
          </label>
          <input type="submit" />
        </form>
      </FormWrapper>
    )
}

export default Login