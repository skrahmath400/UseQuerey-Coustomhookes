import usePerfromwrite from "../Store/Backend/Campuswrite";
function Applyingfunctioncall() {
    const { data: empdata, error: emperror, isPending: empdatapending, isSuccess: empdatafetchedsucess, isIdle: lodingdealy, mutate } = usePerfromwrite();
    const handlingpostdata = () => {
        mutate(
            {

                "name": "yasanaveen",
                "password": "naveen",
                "roleobj": [
                    {

                        "rolename": "CEO"
                    }
                ]
            }
        )
    }
    return (<>
      <button onClick={handlingpostdata} disabled={empdatapending}>click
        {empdatapending ? "posting" :"the  data is submited"}
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
    </>)
}
export default Applyingfunctioncall;