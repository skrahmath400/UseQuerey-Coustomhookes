import { Formik} from "formik"
import { ErrorMessage,Field,Form } from "formik"
import * as Yup from 'yup'
function FormWithFromik(){
  const validationSchema=Yup.object({
    name:Yup.string().required("enter your name"),
    // date:Yup.date().required("please enter the valid date"),
    // age:Yup.number(). required().min(18,'the age should be more then 18')
  })
 const initialValues={
    name:'',
    // date:'',
    // age:''
  }
    return(<>
    <Formik
    
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values,{setSubmitting})=>{
     console.log(values);
     alert(JSON.stringify(values,null,2))
     setSubmitting(false);
    }}>
      
     {({values,dirty,touched,isSubmitting,errors})=>(
        <Form>
            <div className="form-control">
      <label htmlFor="name">Enter name</label>
      <Field name='name' className={`form-control ${values.name && !errors.name ? "is-valid": errors.name && touched.name ? "enter your vaild parameter":'' }`}></Field>
      <ErrorMessage name='name' component='div' className='invalid-feedback'/>
      </div>
      <button type="submit" className="btn btn-primary" disabled={!dirty ||isSubmitting}>
        {isSubmitting ? "submitting":'submit'}

       
      </button>
      <div>
        <button>
             {dirty &&(<p>FORM HAS UNSAVED CHAGES</p>)}
        </button>
      </div>

        </Form>
     )}

    
       
    </Formik>
    
    
    </>)
}
export default FormWithFromik;