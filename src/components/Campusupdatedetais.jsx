import Updatedetails from "../Store/Backend/Campusupdate";

function Updatecampusdetails(){
        const { data: empdata, error: emperror, isPending: empdatapending, isSuccess: empdatafetchedsucess, isIdle: lodingdealy, mutate } = Updatedetails();
        const sendupdatedetails=()=>{
            mutate({
                id:1,
                 "name": "Amreen",
                "password": "gousi",
                "roleobj": [
                    {

                        "rolename": "CEO"
                    }
                ]
            })
        }
    return(
        <>
        <button onClick={sendupdatedetails} disabled={empdatapending}>
         clicktoupdate
        </button>
         {lodingdealy && <p>wating to start</p>}
         
      {empdatafetchedsucess && <p>Data saved successfully!</p>}
      {emperror && <p style={{ color: "red" }}>Error: {emperror.message}</p>}
      {empdata && (
        <div>
          <h4>Response:</h4>
          <pre>{JSON.stringify(empdata, null, 2)}</pre>
        </div>
      )}
        </>

    )
}
export  default Updatecampusdetails;