import React from 'react'
// import routes
import { Link } from 'react-router-dom'
// below import styled-components
import styled from 'styled-components'

// below styled-component
const NavWrapper = styled.div`
display : flex;
color : #ccd9ff;
height : 15vh;
font-size : 2rem;
background-color : #9999ff;
justify-content : center;

> h1 {
 align-self : center;
}
`;

const Navbar = () => <Link to='/' style={{ textDecoration: 'none' }}><NavWrapper><h1>JUMP</h1></NavWrapper></Link>

export default Navbar