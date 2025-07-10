import useCampusdelete from "../Store/Backend/Campusdelete";

function DeleteCampus(){
           const { data: empdata, error: emperror, isPending: empdatapending, isSuccess: empdatafetchedsucess, isIdle: lodingdealy, mutate }= useCampusdelete();
    const sendcampusidtodelte=()=>{
     mutate({id:1})
    }
    return(
<>
<button onClick={sendcampusidtodelte} disabled={empdatapending}>
         clicktodelete
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
export default DeleteCampus;