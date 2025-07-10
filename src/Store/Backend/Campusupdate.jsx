import { Mutation, useMutation } from "@tanstack/react-query"
import axios from "axios"
function Updatedetails(){
  const  baseurl="http://localhost:8080/basepath"
    return(useMutation({
        mutationKey:["updatekey"],
        mutationFn:async(dataobj)=>{
            const{id ,...rest}=dataobj
            const responsedata=await axios.put(`${baseurl}/updateemp/${id}`,rest,{
                headers:{"Content-Type":"application/json"},
            });
            console.log(responsedata.data);
            return responsedata.data;
            
        }
    }))
}
export default Updatedetails