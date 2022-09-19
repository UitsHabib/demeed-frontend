import React from 'react'

function Login() {
  return (
    <div className='container ' style={{marginTop: "12%"}} >
        
        <form>
            <div class="row mb-3">
                <div class="col-sm-5 m-auto">
                    <label>Email Address</label>
                    <input type="email" class="form-control" id="email"  />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-5 m-auto">
                    <label>Password</label>
                    <input type="password" class="form-control" id="password" />
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-sm-5 m-auto">
                    <button type="submit" class="form-control btn btn-primary" id="signinA">Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login;