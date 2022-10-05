import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { permissionSetNameSchema } from "../permission-set.schema";

function PermissionSet () {
        const [shouldRedirect, setShouldRedirect] = useState(false);

        const navigate = useNavigate();
    
        useEffect(() => {
            if (shouldRedirect) {
                navigate('/admin/permission-set/create/successful');
            }
        });

    return (
        <div className='row mt-4'>
            <div className='col-lg-12'>
                <Formik
                    initialValues={{
                        permissionSetName: "",
                    }} 

                    validationSchema={permissionSetNameSchema}

                    onSubmit={(values, actions) => { 

                        console.log(values);

                        setShouldRedirect(true);

                        actions.setSubmitting(false);
                    }}
                > 
                    {(values) => {
                        return (
                            <Form>
                                <div className="row">
                                    <div className='col-lg-4 ms-auto'>
                                        <label 
                                            htmlFor='permissionSetName' className='form-label'>
                                                <h4>
                                                    Create Permission Set for :
                                                </h4>
                                        </label>
                                        <Field type="permissionSetName" className="form-control" id="permissionSetName" name="permissionSetName"  />

                                        <div className='invalid-feedback d-block'>
                                            <ErrorMessage name="permissionSetName" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 ms-auto" role="group" aria-labelledby="checkbox-group">
                                        <h4>Permission List</h4>

                                        <div className="col-lg-6">
                                            <ul className="list-group">
                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="One" />
                                                    Permission to get
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Two" />
                                                    Permission to delete
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Three" />
                                                    Permission to patch
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Four" />
                                                    Permission to post
                                                </li>

                                                <li className="list-group-item">
                                                    <Field name="checked" className="form-check-input me-1" type="checkbox" value="Five" />
                                                    Permission to put
                                                </li>
                                            </ul>
                                            <button type="submit" className="btn btn-success mt-2">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}

export default PermissionSet;