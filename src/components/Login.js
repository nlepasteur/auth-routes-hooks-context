import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
// below import contexts
import { LoginContext } from '../contexts/LoginContext'
// below import styled-components
import styled from 'styled-components'

const FormWrapper = styled.div`
height : 85vh;
padding : 0 3em;
background-color : #ffffff;
>h1{
  margin : 1em 0;
  color : #9999ff;
}
`
const Form = styled.form`
display : flex;
flex-wrap : wrap;
justify-content : center;
margin : 0 auto 0;

>input {
  width : 100%;
  padding : 1em;
  margin : 0.5em 0;
  font-size : 1.5rem;
}

>input:first-child{
  margin-top : 0;
}

>input:last-child{
  width : 50%;
  margin-bottom : 0;
  background-color : #9999ff;
  border : 1px solid #ccd9ff;
  border-radius : 10px;
  font-size : 1.5rem;
  color : #8080ff;
  cursor : pointer;
}
`;

const Login = () => {

  const { user, handleChange, handleSubmit } = useContext(LoginContext)

  return user.loggedIn ?
    (
      <Redirect to='/admin' />
    )
    :
    (
      <FormWrapper>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder='username' value={user.name} onChange={handleChange} />

          <input type="text" name="password" placeholder='password' value={user.password} onChange={handleChange} />

          <input type="submit" value="Sign in" />
        </Form>
      </FormWrapper>
    )
}

export default Login