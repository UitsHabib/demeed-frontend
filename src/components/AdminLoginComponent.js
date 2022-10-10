import React from 'react'

function AdminLogin() {
  return (
    <div className='container ' style={{marginTop: "12%"}} >
        <div class="row mb-3">
            <div class="col-sm-5 m-auto">
                <h3> Admin login </h3>
            </div>
        </div>
        <form>
            <div class="row mb-3">
                <div class="col-sm-5 m-auto">
                    <input type="email" class="form-control" id="email"  placeholder='Enter your email address' />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-5 m-auto">
                    <input type="password" class="form-control" id="password" placeholder='Enter your password'/>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-5 m-auto">
                    <button type="submit" class="form-control btn btn-primary" id="signinA">Sign in</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AdminLogin;