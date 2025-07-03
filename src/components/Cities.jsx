import Usecities from '../Store/Backend/Cities'
function Implementations(){
    const{data:citiesdata,error:Citieserror,isPending:isLodingcities}=Usecities();
    if(isLodingcities){
        return(<div>
            ....Loding Cityes Data;
        </div>)
    }
    if(Citieserror){
        return(<div>
        the error is {Citieserror.error};
        </div>)
    }
    return(<>
    <div>
        <h2>The Cities are</h2>
        {citiesdata.map((e)=>(
            <li key={e.id}>{e}</li>
        ))}
    </div>
          
    
    </>)
}
export  default Implementations;