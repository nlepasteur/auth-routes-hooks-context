import React from 'react'
// import routes
import { Link } from 'react-router-dom'
// below import styled-components
import styled from 'styled-components'

// below styled-component
const NavWrapper = styled.div`
height : 15vh;
font-size : 2rem;
background-color : blue;;
text-align : center;


`;

const Navbar = () => <NavWrapper><Link to='/'><h1>JUMP</h1></Link></NavWrapper>

export default Navbar