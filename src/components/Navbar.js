import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {


  function NavLinkStyle({isActive}){
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' :'underline'
    } 
  }


  return (
  <>
  <nav>
  <NavLink to='/' style={NavLinkStyle}>Home</NavLink>
  <NavLink to='/about'style={NavLinkStyle} >About</NavLink>
  <NavLink to='products' style={NavLinkStyle}>Products</NavLink>
  </nav> 
  
  </>
  )
}

export default Navbar