import React from 'react'
// below import routes
import { Link } from 'react-router-dom'
// below import styled-components
import styled from 'styled-components'

const SignIn = styled.div`
text-align : center;
height : 85vh;

> button {
  background-color:#9999ff;
  color : #8080ff;
  margin : 2em 0;
  padding : 1em;
  border : none;
  font-size : 3rem;
  text-decoration : none;
  cursor : pointer;
}
`;

const Home = () => {

  return (
    <Link to='/login'>
      <SignIn>
        <button>Welcome</button>
      </SignIn>
    </Link>
  )
}

export default Home