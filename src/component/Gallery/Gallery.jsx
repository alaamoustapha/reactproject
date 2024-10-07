import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Gallery() {
  return (
    <>


       <ul className='list-unstyled d-flex flex-wrap justify-content-around '>

        <li><Link to={'mobile'} className='text-decoration-none'> mobile </Link></li>
        <li><Link to={'ipad'} className='text-decoration-none'> ipad </Link></li>

        </ul>

        <div>
       <Outlet></Outlet>
        </div> 


    </>
  )
}
