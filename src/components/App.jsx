import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from './Footer'
import Header from './Header'
function App() {
  return (
    <div className='bg-white'>
        <Header/>
          <Outlet/>
        <Footer/>
    </div>
  )
}

export default App