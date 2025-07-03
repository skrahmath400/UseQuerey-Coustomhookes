import { useState } from "react";

function useColorChange(){
    const[dispaly,displaychange]=useState(false);
   const implement=()=>{
    displaychange(!dispaly);
   
   }
   return {dispaly,implement};

}
function ColorChange(){
    const{dispaly,implement}=useColorChange();
    const pageStyle={
         backgroundColor: dispaly ? 'blue' : 'yellow',
          minHeight: '100vh'
    }
    return(<div style={pageStyle}>
    <h1>
        we are changing the background
    </h1>
    <button onClick={implement}  style={{
                    padding: '10px 20px',
                    
                }}  >
   changecolor
    </button>
   </div>);

}
export default ColorChange;