import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Facebook } from 'react-content-loader'
import {lazy,Suspense} from 'react'
import LayOut from '../../Pages/LayOut'
import CustomErrorBoundary from '../ErrorBoundary/ErrorBoundary';


const Home = lazy(()=>import ('../../Pages/home') );
const CoinDetailsPage = lazy(()=>import ('../../Pages/CoinDetailsPage') );



const Routing = () => {
  return (
    <CustomErrorBoundary>
      <Suspense fallback={<div><Facebook /></div>}>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Home />} />
            <Route path="/details/:coinId" element={<CoinDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </CustomErrorBoundary>
  );
};

export default Routing;
