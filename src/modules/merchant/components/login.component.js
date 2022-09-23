import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div id="main-wrapper" class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10">
                        <div class="card border-0">
                            <div class="card-body p-0">
                                <div class="row no-gutters">
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="mb-5">
                                                <h3 class="h4 font-weight-bold text-theme">Login</h3>
                                            </div>

                                            <h6 class="h5 mb-0">Log in to your store!</h6>
                                            <p class="text-muted mt-2 mb-5">Enter your email address and password to access seller panel.</p>

                                            <form>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1"/>
                                                </div>
                                                <div class="form-group mb-5">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1"/>
                                                </div>
                                                <button type="submit" class="btn btn-theme">Login</button>
                                                <a href="#" class="forgot-link float-right text-primary">Forgot password?</a>
                                            </form>
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
                                </div>

                            </div>                            
                        </div>
                        <p class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="#" class="text-primary ml-1">register</a></p>
                    </div>                    
                </div>                
            </div>
        )
    }
}

export default Login