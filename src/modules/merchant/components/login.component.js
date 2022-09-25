import React, { Component } from 'react'
import  { Formik, Form, Field, ErrorMessage} from 'formik';
import { loginSchema } from './../merchant.schema';

class Login extends Component {
    render() {
        return (
            <div id="main-wrapper" class="container justify-content-center col-xl-10">                      
                <div class="row no-gutters">
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="mb-5">
                                <h3 class="h4 font-weight-bold text-theme">Login</h3>
                            </div>
                            <h6 class="h5 mb-0">Log in to your store!</h6>
                            <p class="text-muted mt-2 mb-5">Enter your email address and password to access merchant panel.</p>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password:''
                                }}
                                validationSchema= { loginSchema } 
                                onSubmit = {(values, actions) => {
                                    console.log(values);
                                }}                                                
                            >
                            {(formikprops) => {
                                return (
                                    <Form>
                                        <div className='form-group'>
                                            <label htmlFor='email'>Email address</label>
                                            <Field type="email" class="form-control" id="email" name='email'/>
                                            <div>
                                                <ErrorMessage name='email' />
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='password'>Password</label>
                                            <Field type="password" class="form-control" id="password" name='password'/>
                                            <div>
                                                <ErrorMessage name='password' />
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Login</button>
                                        <a href="#" class="forgot-link float-right text-primary">Forgot password?</a>
                                    </Form>
                                )
                            }}
                            </Formik>                                            
                        </div>
                    </div>

                    <div class="col-lg-6 d-none d-lg-inline-block">
                        <div class="account-block rounded-right">
                            <div class="overlay rounded-right"></div>
                            <div class="account-testimonial">
                                <h4 class="text-white mb-4">Start selling</h4>
                                <p class="lead text-white">"The fastest-growing and preferred acquisition channel for over half our multichannel sellers."</p>                                                
                            </div>
                        </div>
                    </div>                        
                    <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="#" class="text-primary ml-1">register</a></p>
                </div>                                               
            </div>
        )
    }
}

export default Login