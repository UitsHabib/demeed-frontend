import React from 'react';
import { Formik, Form} from 'formik';

import InputControl from '../../core/components/InputControl';
import ButtonControl from '../../core/components/ButtonControl';
import { customerSchema } from '../customerSchrema';

function FromComponent() {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                repassword: "",
            }}
            validationSchema={customerSchema}
            onSubmit={(valus, actions) => {
                console.log(valus);
                actions.setSubmitting(false);
            }}
        >
            {(formikprops) => {
                return (
                    <Form className='my-8 space-y-4'>
                        <InputControl
                            inputStyle="inputStyle"
                            type="text"
                            name="name"
                            identity="name"
                            label="Name :"
                            labelStyle="text-gray"
                            position="top"
                        />

                        <InputControl
                            inputStyle="inputStyle"
                            type="email"
                            name="email"
                            identity="email"
                            label="Email :"
                            labelStyle="text-gray"
                            position="top"
                        />

                        <div className='flex gap-4'>
                            <InputControl
                                divClass="w-6/12"
                                inputStyle="inputStyle"
                                type="password"
                                name="password"
                                identity="password"
                                label="Password :"
                                labelStyle="text-gray"
                                position="top"
                            />
                            <InputControl
                                divClass="w-6/12"
                                inputStyle="inputStyle"
                                type="password"
                                name="repassword"
                                identity="repassword"
                                label="Confirm password :"
                                labelStyle="text-gray"
                                position="top"
                            />
                        </div>
                        <div className='space-x-3'>
                            <input type="checkbox" id="checkbox" />
                            <label htmlFor='checkbox' className='text-gray'>I accept the <span className='text-main'>terms of service</span> as well as <span className='text-main'>Privacy Policy</span>.</label>
                        </div>
                        <ButtonControl type='submit' className='btn btnUp' children='SIGN UP' />
                    </Form>
                );
            }}
        </Formik>

    );
};

export default FromComponent;