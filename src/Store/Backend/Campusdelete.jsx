import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function useCampusdelete(){
  const  baseurl="http://localhost:8080/basepath/"
    return(useMutation(
        {
            mutationKey:["deletekey"],
            mutationFn:async (campusdataobject)=>{
                const {id, ...rest}=campusdataobject;
            const datafetch=await axios.delete(`${baseurl}/deletemapping/${id}`,{
                headers :{'Content-Type':"application/json"}
            
            })
           console.log(( datafetch).data)
           return ( datafetch).data;

            }
        }
    ))
}
export default useCampusdelete;