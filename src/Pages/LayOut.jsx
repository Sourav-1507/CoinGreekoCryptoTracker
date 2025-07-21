import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <div>
          <Navbar />
          <Outlet />
    </div>
  )
}

export default LayOut
