import useCampus from "../Store/Backend/Campus"


function CampusImplementaion(){
   const {data :campusdata,error:campuserror,isPending:campusloding}=useCampus();
   if(campusloding){
    return("....isloading");
   }
   if(campuserror){
    return("...there is someerror "+{campuserror});
   }

    return(<>
    <div>
        <h1>The Fetched data is</h1>
        <div className="container border bg-warning">        
            <ul >{campusdata.map(e=>(
            <ul className="border" key={e.id}>
            <li >{e.cityid}</li>
             <li >{e.cityname}</li>
            <li>{e.cityLocation}</li>
            <li >{e.date}</li>
            </ul>
        ))}</ul>
        </div>

    </div>
    </>)
}
export default CampusImplementaion;

