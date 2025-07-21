import {  useState,useContext } from "react";
import { FetchCoinData } from "../Services/FetchCoinData";
import {useQuery} from "@tanstack/react-query"
import { CurrencyContext} from "../context/CurrencyContext";
import { useNavigate } from "react-router-dom";


function Cointable() {

  const {currency} = useContext(CurrencyContext);
  const [page , setPage] = useState(1);
  const navigate = useNavigate();
  const {data , isLoading, isError, error, } = useQuery({
     queryKey: ['coins', page, currency],
     queryFn: () => FetchCoinData(page, currency),
     retry: 2,
     retryDelay: 1000,
     cacheTime: 1000 * 60 * 2,
  } );
  if(isLoading){
    return <div>is loading..</div>
  }
  if (isError){
     return <div>Error: {error.message}</div>
  }
   const handleGoDetails = (coinId) =>{
        navigate(`/details/${coinId}`)
    }
  return(
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[90vw] mx-auto">
      <div className="w-full bg-yellow-400 text-black flex py-3 px-3 font-semibold items-center      justify-center">
          {/* header of coin table */}
          <div className="basis-[30%]">Coin</div>
          <div className="basis-[20%]">Price</div>
          <div className="basis-[25%]">24 hrs cahnge value</div>
          <div className="basis-[20%]">Market Cap</div>
      </div>
      <div className="flex flex-col w-[90vw] mx-auto">
        {data && data.map((coin) => {
          return (
            <div key={coin.id} className="w-full background-transparent text-black flex py-4 px-2 font-semibold items-center justify-between">
              <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem]">
                       <img src={coin.image} className="w-full h-full"/>
                  </div>
                  <div className="flex flex-col"> 
                    <div className="text-3xl"> {coin.name}</div>
                    <div className="text-xl"> {coin.symbol}</div>
                  </div>
               </div>
               <div className="basis-[25%]">
                 {coin.current_price}
               </div>
               <div className="basis-[20%]">
                 {coin.high_24h}
               </div>
               <div className="basis-[20%]">
                 {coin.market_cap}
               </div>
               <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => handleGoDetails (coin.id)}
                  >
                 Get Details
               </button>


            </div>
          );
        })}

      </div>

      <div className="flex gap-4 justify-center items-center">
        <button 
           disabled={page === 1}
           onClick={()=>setPage(page-1)} 
           className="btn btn-primary btn-wide text-black text-2xl"
        > Prev
        </button>
        <button 
          onClick={()=>setPage(page+1)} 
          className="btn btn-secondary btn-wide text-black text-2xl"
        >
          Next
        </button>
      </div>


    </div>
  )
  
}

export default Cointable;
