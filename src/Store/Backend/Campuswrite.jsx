import { Mutation, useMutation } from "@tanstack/react-query"
import axios from "axios"
function usePerfromwrite(){
   let baseurl="http://localhost:8080/basepath";
    return(useMutation({
        mutationKey:["write"],
        mutationFn:async(postingdata)=>{
       const datares=await axios.post(`${baseurl}/postdata`,postingdata,{
          headers:{"Content-Type":"application/json"},

       });
       console.log(datares);
         return datares.data;
        }
    }))
}
export default usePerfromwrite;