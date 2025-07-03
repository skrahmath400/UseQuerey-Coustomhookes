import { useQuery } from "@tanstack/react-query"
function useCampus(){
   return(
     useQuery({
        queryKey:['campus'],
        queryFn:async ()=>{
            const resultant=await fetch("http://localhost:8080/baseurl/alldata");
            console.log(resultant);
            
        return await resultant.json();
        }
     })


    );
   
}
export default useCampus;