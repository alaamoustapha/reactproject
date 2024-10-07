import { useState } from 'react'
import Home from './component/Home/Home'
import { About } from './component/About/About'
import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import NotFound from './component/NotFound/NotFound'
import Gallery from './component/Gallery/Gallery'
import Mobile from './component/Mobile/Mobile'
import Ipad from './component/Ipad/Ipad'



let routers = createBrowserRouter([ 

    {path:'' , element:<Layout/>, children:[
    // {index: true , element:<Home/>},  // خليت دى اول حاجة هتتنفذ بمجرد دخولى الموقع بالاندكس ترو
    {path:'home' , element:<Home/>}, 
    {path:'about' , element:<About/>},
    {path:'gallery' , element:<Gallery/> , children:[
      {path:'mobile' , element:<Mobile/>},
      {path:'ipad' , element:<Ipad/>}
    ]},

    {path:'*' , element:<NotFound/>}
  ]}   

  ])



function App() {
 

  return (
    <>

      {/* <Home/>
      <About/> */}
      {/* من خلاله بزود ال App كله بالروتينج بتاعى  */}
     
     <RouterProvider router= {routers}></RouterProvider>  

    </>
  )
}

export default App

