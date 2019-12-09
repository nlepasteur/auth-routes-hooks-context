import React from 'react'
// below import routes
import { Link } from 'react-router-dom'
// below import styled-components
import styled from 'styled-components'

const SignIn = styled.div`
text-align : center;
background-color : lightgrey;
height : 80vh;

> button {
  margin : 2em 0;;
  padding : 1em;
  border : none;
  font-size : 3rem;
  text-decoration : none;
}
`

const Home = () => {

  return (
    <Link to='/login'>
      <SignIn>
        <button>Sign in</button>
      </SignIn>
    </Link>
  )
}

export default Home