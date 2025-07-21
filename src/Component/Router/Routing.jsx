import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CoinDetailsPage from '../../Pages/CoinDetailsPage'
import Home from '../../Pages/home'
import LayOut from '../../Pages/LayOut'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path= "/" element={<LayOut />}>
                <Route index element ={<Home />} />
                <Route path= "/details/:coinId" element={<CoinDetailsPage />} />
            
            </Route>
            

            
        </Routes>
    </div>
  )
}

export default Routing
