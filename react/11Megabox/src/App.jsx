import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login , logout} from "./store/authSlice"
import { Footer , Header} from './components/index'
import { Outlet } from 'react-router'

function App() {

  const [Loading, setLoading] = useState(true)

 const dispatch = useDispatch() ; 
  
  useEffect(()=> {
    authService.getCurrentUser().then((userData)=> {
         if(userData) {
          dispatch(login({userData})) ; 
         }
         else {
          dispatch(logout()) ; 
         }
    })
    .finally(()=> setLoading(false)) ; 
  } , [])

   
 return !Loading ? (
  <div className='min-h-screen flex flex-wrap bg-gray-400' >
    <div className='w-full block'>
  <Header/>
  <main>
   TODO: {/* <Outlet/> */}
  </main>
  <Footer/>
  </div>
  </div>
 ) : (null) ;

}

export default App
