import React from 'react'
// below import routes
import { Link } from 'react-router-dom'
// below import styled-components
import styled from 'styled-components'

const SignIn = styled.div`
height : 85vh;
text-align : center;

> button {
  margin : 2em 0;
  padding : 1em;
  background-color:#9999ff;
  border-radius : 10px;
  border : none;
  font-size : 3rem;
  color : #8080ff;
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