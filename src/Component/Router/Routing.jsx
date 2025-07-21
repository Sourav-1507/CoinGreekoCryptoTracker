import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoinDetailsPage from '../../Pages/CoinDetailsPage'
import Home from '../../Pages/home'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/details/:coinId" element={<CoinDetailsPage />} />

            
        </Routes>
    </div>
  )
}

export default Routing
