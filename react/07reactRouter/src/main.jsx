import { StrictMode } from 'react'
import{ createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { gihubInfoLoder } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {path: '/' , 
//   element: <Layout/> , 
//   children:[
//     {path: "" , 
//       element: <Home/>
//     } , 
//     {
//       path:"About" ,
//       element: <About/>
//     },
//     {
//       path:"contact" ,
//       element: <Contact/>
//     }
//   ]
// }])

// 2nd method 

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout/>}>
        <Route path='' element = {<Home/>} />
        <Route path='About' element = {<About/>} />
        <Route path='Contact' element = {<Contact/>} />
        <Route path='user/:userid' element = {<User/>} />
        <Route loader ={gihubInfoLoder} path='github' element = {<Github/>} />
     </Route>    
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router ={router}/>
  </StrictMode>,
)
