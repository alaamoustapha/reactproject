import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <ul className='d-flex flex-wrap bg-danger-subtle justify-content-around list-unstyled'>
   
        <li><NavLink to={'home'} className='text-decoration-none'> home </NavLink>  </li>
        <li><NavLink to={'about'} className='text-decoration-none'> about </NavLink> </li>
        <li><NavLink to={'gallery'} className='text-decoration-none'> gallery </NavLink> </li>

    </ul>
    
    </>
   
  )
}







