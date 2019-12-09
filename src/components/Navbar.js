import React from 'react'
// import routes
import { Link } from 'react-router-dom'
// below import styled-components
import styled from 'styled-components'

// below styled-component
const NavWrapper = styled.div`
display : flex;
height : 15vh;
justify-content : center;
background-color : #9999ff;
font-size : 2rem;
color : #8080ff;

> h1 {
 align-self : center;
}
`;

const Navbar = () => <Link to='/' style={{ textDecoration: 'none' }}><NavWrapper><h1>JUMP</h1></NavWrapper></Link>

export default Navbar