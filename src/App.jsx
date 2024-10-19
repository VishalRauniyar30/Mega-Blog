import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-lime-200'>
      <div className='w-full block'>
        <Header />
        <main >
          {/* <div className='bg-yellow-600 hover:bg-yellow-200 mx-auto text-orange-800 hover:text-orange-400 hover:cursor-pointer text-2xl'>
            TODO :  
          </div>   */}
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App