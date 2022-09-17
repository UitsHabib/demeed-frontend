import React, { Component } from 'react';

class CutomerLogin extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row d-flex justify-content-center mt-5'>
                    <div className='col-sm-12 col-md-4 col-lg-4 col-xl-4 border rounded p-3 mt-5'>
                        <h4 className='text-center mb-4 fw-bold'>LogIn</h4>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-user"></i></span>
                            <input type="text" className="form-control" placeholder="Username/Email"/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                            <input type="text" className="form-control" placeholder="Password"/>
                        </div>
                        <div className=''>
                            <button type='submit' className='btn btn-success float-end'>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CutomerLogin;
