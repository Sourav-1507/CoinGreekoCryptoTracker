import {  useState } from "react";
import { FetchCoinData } from "../Services/FetchCoinData";
import {useQuery} from "@tanstack/react-query"

function Cointable() {
  const [page , setPage] = useState(1);
  const {data , isLoading, isError, error, } = useQuery({
     queryKey: ['coins', page],
     queryFn: () => FetchCoinData(page, 'usd'),
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
  return <div>Coin Table <button onClick={()=>setPage(page+1)}>Click me!</button>{page}</div>;
}

export default Cointable;
