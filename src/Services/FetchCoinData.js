import axiosinstance from "../helpers/Axiosinstance"

export async function FetchCoinData(){
    try {
       const response = axiosinstance.get('/coins/markets?vs_currency=usd')
       console.log(response);
       return response;
    }catch(error){
        console.error(error);
        return null;

    }
}