import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <input type='search' placeholder='search here'></input>

    <nav>
        <NavLink to='features'>Features</NavLink>
        <NavLink to='new'>New</NavLink>
    </nav>
    <Outlet/>

    </> 
  )
}

export default Products