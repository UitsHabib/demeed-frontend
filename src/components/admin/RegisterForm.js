import React from 'react';
import AdminImage from '../../media/admin_register.svg'
import InputControl from '../composeable/InputControl';
import Button from '../composeable/Button';
function RegisterForm(props) {
    return (
        <div className='row p-5'>
            <div className='col-md-6'>
                <h3 className='title py-3 fw-bold'>
                    Let's register as admin on Demeed ...
                </h3>
                <br></br>

                <InputControl 
                    label = 'Full Name : '
                    name = 'full_name'
                    type = 'text'
                    placeholder = 'Deo Parox'
                />
                
                <InputControl 
                    label = 'Email : '
                    name = 'email'
                    type = 'email'
                    placeholder = 'deo.parox@gamil.com'
                />


                <InputControl 
                    label = 'Password:  '
                    name = 'password'
                    type = 'password'
                    placeholder = 'Type your password here'
                />

                <InputControl 
                    label = { <React.Fragment>I've read and understood Demeed <a href='#'>Terms & Conditions</a> </React.Fragment>}
                    name = 'terms&condition'
                    type = 'checkbox'
                />

                <Button buttonClass='p-button fw-bold'>Register as admin</Button>

            </div>
            <div className='col-md-6 d-md-block d-sm-none'>
                <img src={AdminImage} className='w-80'></img>
            </div>
        </div>
    );
}

export default RegisterForm;