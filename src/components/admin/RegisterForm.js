import React from 'react';
import AdminImage from '../../media/admin_register.svg'

function RegisterForm(props) {
    return (
        <div className='row p-5'>
            <div className='col-md-6'>
                <h3 className='title py-3 fw-bold'>
                    Let's register as admin on Demeed ...
                </h3>
                <br></br>
                <div class="mb-3">
                    <label for="nameInput" class="form-label">Full Name : </label>
                    <input type="text" class="form-control" id="nameInput" placeholder="Deo Parox"></input>
                </div>
                <div class="mb-3">
                    <label for="emailinput" class="form-label">Email address : </label>
                    <input type="email" class="form-control" id="emailinput" placeholder="name@example.com"></input>
                </div>

                <div class="mb-3">
                    <label for="passInput" class="form-label">Password: </label>
                    <input type="password" class="form-control" id="passInput" placeholder="Type your password here"></input>
                </div>

                <div class="form-check py-2">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                    <label class="form-check-label" for="flexCheckDefault">
                    I've read and understood Demeed <a href='#'>Terms & Conditions</a>
                    </label>
                </div>
                <button className='p-button fw-bold'>Register As Admin</button>
            </div>
            <div className='col-md-6 d-md-block d-sm-none'>
                <img src={AdminImage} className='w-80'></img>
            </div>
        </div>
    );
}

export default RegisterForm;