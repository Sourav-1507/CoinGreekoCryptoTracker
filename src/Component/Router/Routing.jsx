import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Facebook } from 'react-content-loader'
import {lazy,Suspense} from 'react'
import LayOut from '../../Pages/LayOut'

const Home = lazy(()=>import ('../../Pages/home') );
const CoinDetailsPage = lazy(()=>import ('../../Pages/CoinDetailsPage') );

const Routing = () => {
  return (
    
       
          <Routes>
             <Route path= "/" element={<LayOut />}>
                <Route index element ={<Home />} />
                <Route path= "/details/:coinId" element= {
                  <Suspense fallback={<div><Facebook /></div>}>
                    <CoinDetailsPage />
                  </Suspense> }
 
                    
                />
            </Route>
          </Routes>
        
  );
};

export default Routing
