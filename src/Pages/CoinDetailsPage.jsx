import React from 'react'
import { useParams } from 'react-router-dom'

const CoinDetailsPage = () => {
    const {coinId} = useParams();
  return (
    <div>
      <h1>Coin Detail Page :{coinId}</h1>
        
    </div>
  )
}

export default CoinDetailsPage
