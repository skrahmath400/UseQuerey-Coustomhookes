import { useState } from "react"

function Handlingusestate(){
    const[data,setdata]=useState({name:"",age:0,address:""})
   updatedetails((e)=>{
    const{name,value}=e.value;
    setdata([...name,value]);
   })
    return(<>

     <input type="text" placeholder="enter name" value={data.name} onClick={(e)=>{updatedetails}}>Enter your name</input>
    </>)
}
export default  Handlingusestate;