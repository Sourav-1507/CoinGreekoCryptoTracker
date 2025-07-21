import axiosinstance from "../helpers/Axiosinstance"

export async function FetchCoinDetails(id){
    const perPage = 10;
    try {
       const response = await axiosinstance.get(`/coins/${id}`)
       console.log(response.data);
       return response.data;
    }catch(error){
        console.error(error);
        return null;

    }
}