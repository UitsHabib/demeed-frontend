import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../admin.schema';

function Login() {
    return (
        <div className='container ' style={{ marginTop: "12%" }} >
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
                        <section className='vh-100'>
                            <div className="conatiner ">
                                <div className="row d-flex justify-content-center align-items-center h-100">
                                    <div className="col col-xl-4">
                                        <div className="card login-card">
                                            <div className="row g-0">
                                                <div className="col-md-6 col-lg-12 d-flex align-items-center">
                                                    <div className="card-body p-4 p-lg-5 text-black">
                                                        <Form>
                                                            <div className='form-outline mb-3'>
                                                                <label htmlFor='email' className='form-label'>Email Address</label>
                                                                <Field type="email" className="form-control" id="email" name="email" />
                                                                <div className='invalid-feedback d-block'>
                                                                    <ErrorMessage name="email" />
                                                                </div>
                                                            </div>
                                                            <div className='form-outline mb-3'>
                                                                <label htmlFor='password' className='form-label'>Password</label>
                                                                <Field type="password" className="form-control" id="password" name="password" />
                                                                <div className='invalid-feedback d-block'>
                                                                    <ErrorMessage name="password" />
                                                                </div>
                                                            </div>
                                                            <div className="pt-1">
                                                            <button type="submit" className="btn btn-dark btn-block">Login</button>
                                                            </div>
                                                            
                                                        </Form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Login;