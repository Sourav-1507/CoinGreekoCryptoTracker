import { useQuery } from '@tanstack/react-query';

import { useParams } from 'react-router-dom'
import {FetchCoinDetails} from '../Services/FetchCoinDetails'
import parse from 'html-react-parser';

const CoinDetailsPage = () => {
    const {coinId} = useParams();
    const { data: coin, isLoading, isError } = useQuery({
           queryKey: ["coin", coinId],
           queryFn: () => FetchCoinDetails(coinId)
  
         });
    

    if (isLoading){
      return <div>Is Loading...</div>
      
    }
    if (isError){
      return<div>Error: SomeThing went wrong</div>
    }
  return (
    <div className="flex flex-col bg-lime-100 md:flex-row  ">
        <div
          className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500 px-5"
          >
          <h1 className="text-2xl font-bold mt-4">{coin?.name}</h1>
          <img 
            alt ={coin?.name}
            src= {coin?.image?.large}
            className='h-52 mb-5'
          
          />
          
          <p className="text-gray-600 uppercase">{coin?.symbol}</p>

          <p className="text-lg leading-relaxed text-justify">
              {parse (coin?.description?.en)}.
          </p>
          <div className='w-full flex flex-col md:flex-row md:justify-around'>
               <div className='flex items-center mb-4 md:mb-8'>
                   <h2 className='text-xL font-bold'>Rank:</h2>
                   <span className='ml-3 text-xL'>
                     {coin?.market_cap_rank}
                   </span>
               </div>
               <div className='flex items-center mb-4 md:mb-8'>
                   <h2 className='text-xL font-bold'>Current Price:$</h2>
                   <span className='ml-3 text-xL'>
                     {coin?.market_data.current_price['usd']}
                   </span>
               </div>
          </div>

        </div>
        <div className='md:w-2/3 w-full m-5'>
           Coin Information:
        </div>
    </div>
  )
}

export default CoinDetailsPage;
