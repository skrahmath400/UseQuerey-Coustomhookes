import { useQuery } from "@tanstack/react-query";

function Usecities(){
    const baseurl="https://example.org/products.json"
    return(useQuery({
        queryKey:['resdata'],
        queryFn:async () =>{
          const response= await fetch(baseurl);
          if(!response.ok){
            throw new Error("network error occured");
          }
         return response.json();
        },
        staleTime:1000*60*2,
        retry:2,
        
    }))
}
export default Usecities;