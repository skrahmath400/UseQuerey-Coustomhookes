import { useState } from "react"

function CheckboxExample(){
    const [data,setdata]=useState({reading:false,traveling:false,submitted:false})
    const Formdata=(e)=>{
      const  [name,value]=e.target;
        setdata({...data, name:[value]});
    }
    return(<>
    
    <form>
        <div>
        <div>
            <label htmlFor="mul">reading</label>
            <input type="checkbox"    className="form-check-input" id="reading" checked={data.reading} onChange={Formdata}></input>
        </div>
        <div >
            <label htmlFor="travel">travelling</label>
            <input type="checkbox" className="form-check" id='travel' checked={data.traveling} onChange={Formdata}/>
        </div>
        </div>
    </form>
    </>)
}
export default CheckboxExample;