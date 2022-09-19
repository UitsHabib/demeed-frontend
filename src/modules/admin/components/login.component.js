import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../admin.schema';

function Login() {
  return (
    <div className='container ' style={{marginTop: "12%"}} >
        <Formik
            initialValues={{
                email: "",
                password: ""
            }} 
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.setSubmitting(false);
            }}
        > 
            {(formikprops) => {
                return (
                    <Form>
                        <div className='form-group mb-3'>
                            <label htmlFor='email' className='form-label'>Email Address</label>
                            <Field type="email" className="form-control" id="email" name="email"  />
                            <div className='invalid-feedback d-block'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <div className='form-group mb-3'>
                            <label htmlFor='password' className='form-label'>Password</label>
                            <Field type="password" className="form-control" id="password" name="password"  />
                            <div className='invalid-feedback d-block'>
                                <ErrorMessage name="password" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </Form>
                )
            }}
        </Formik>
    </div>
  )
}

export default Login;