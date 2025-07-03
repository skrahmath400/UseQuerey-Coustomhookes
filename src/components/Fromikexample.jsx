import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormikExample() {
  // Yup validation schema (corrected)
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must have at least two characters'),
    age: Yup.number()
      .required('Age is required')
      .min(18, 'You must be above 18 years'),
    date: Yup.date()
      .required('Date is required')
      .max(new Date(), 'Date cannot be in the future'),
    gender: Yup.string().required('Gender is required'),
    hobbies: Yup.array().min(1, 'At least one hobby is required'),
  });

  // Initial values
  const initialValues = {
    name: '',
    age: '',
    date: '',
    gender: '',
    hobbies: [],
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log('The data we got:', values);
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ dirty, isSubmitting, setFieldValue, values, errors, touched }) => (
        <Form className="container mt-4">
          <h2>Registration Form</h2>
          <div className="row">
            {/* Left column: Name, Age, Date */}
            <div className="col-md-6">
              {/* Name Field */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className={`form-control ${values.name && !errors.name ? 'is-valid' : errors.name && touched.name ? 'is-invalid' : ''}`}
                  placeholder="Enter name"
                />
                {/* Error display: Shows if 'name' is touched and has an error */}
                <ErrorMessage name="name" component="div" className="invalid-feedback" />
              </div>
              {/* Age Field */}
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age
                </label>
                <Field
                  type="number"
                  name="age"
                  className={`form-control ${values.age && !errors.age ? 'is-valid' : errors.age && touched.age ? 'is-invalid' : ''}`}
                  placeholder="Enter age"
                />
                {/* Error display: Shows if 'age' is touched and has an error */}
                <ErrorMessage name="age" component="div" className="invalid-feedback" />
              </div>
              {/* Date Field */}
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date of Application
                </label>
                <Field
                  type="date"
                  name="date"
                  className={`form-control ${values.date && !errors.date ? 'is-valid' : errors.date && touched.date ? 'is-invalid' : ''}`}
                />
                {/* Error display: Shows if 'date' is touched and has an error */}
                <ErrorMessage name="date" component="div" className="invalid-feedback" />
              </div>
            </div>

            {/* Right column: Gender and Hobbies */}
            <div className="col-md-6">
              {/* Gender Radio Buttons */}
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div className="form-check">
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    className="form-check-input"
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    className="form-check-input"
                    id="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                {/* Error display: Shows if 'gender' is touched and has an error */}
                <ErrorMessage name="gender" component="div" className="text-danger" />
              </div>
              {/* Hobbies Checkboxes */}
              <div className="mb-3">
                <label className="form-label">Hobbies</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="reading"
                    value="Reading"
                    checked={values.hobbies.includes('Reading')}
                    onChange={(e) => {
                      const newHobbies = e.target.checked
                        ? [...values.hobbies, e.target.value]
                        : values.hobbies.filter((h) => h !== e.target.value);
                      setFieldValue('hobbies', newHobbies);
                    }}
                  />
                  <label className="form-check-label" htmlFor="reading">
                    Reading
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="traveling"
                    value="Traveling"
                    checked={values.hobbies.includes('Traveling')}
                    onChange={(e) => {
                      const newHobbies = e.target.checked
                        ? [...values.hobbies, e.target.value]
                        : values.hobbies.filter((h) => h !== e.target.value);
                      setFieldValue('hobbies', newHobbies);
                    }}
                  />
                  <label className="form-check-label" htmlFor="traveling">
                    Traveling
                  </label>
                </div>
                {/* Error display: Shows if 'hobbies' is touched and has an error */}
                <ErrorMessage name="hobbies" component="div" className="text-danger" />
              </div>
            </div>
          </div>

          {/* Submit Button: Uses 'dirty' to disable if no changes */}
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={!dirty || isSubmitting} // 'dirty' controls button state
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>

          {/* Unsaved Changes Warning: Uses 'dirty' to show alert */}
          {dirty && (
            <div className="mt-3 alert alert-warning">
              Form has unsaved changes!
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default FormikExample;