import React from 'react';
// import Button from './Button';
// import Informations from './Informations';
// import MarkSelections from './MarkSelections';
// import TextAreaContent from './TextAreaContent';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { singupSchema } from '../../customerSchema';

function FormPage() {
    return (
        <div className='container mx-auto'>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={ singupSchema }
                onSubmit={(values, actions)=>{
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                {(formikprops) => {
                    return (
                        <Form>
                            <div className='form-group mb-3'>
                                <label className='textLabel' htmlFor="email">Inter Your Email :</label>
                                <Field type="email" className="inputStyle" id="email" name="email" />
                                <div className='invalid-feedback text-red-600 block'>
                                    <ErrorMessage name="email" />
                                </div>
                            </div>

                            <div className='form-group mb-3'>
                                <label className='textLabel' htmlFor="password">Inter Your Password :</label>
                                <Field type="password" className="inputStyle" id="password" name="password" />
                                <div className='invalid-feedback block'>
                                    <ErrorMessage name="password" />
                                </div>
                            </div>

                            <button type='submit' className='btnStyle'>Sing Up</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
};

export default FormPage;
















{/* <form className='my-10'>
                <div className='formStyle'>
                    <h1 className='formTitel'>Customer Details:</h1>
                    <hr className='hrLineStyle' />

                    <div className='w-10/12 mx-auto my-10'>
                        <Informations />
                        <hr className='hrLineStyle' />
                        <TextAreaContent />
                        <MarkSelections />
                        <hr className='hrLineStyle' />
                        <Button myStyle="btnStyle">Submit</Button>
                    </div>
                </div>
            </form> */}
