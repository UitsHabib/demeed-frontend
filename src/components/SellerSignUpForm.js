// import React from "react";
import "./style.css";

const SignUpSeller = () => {
    return(
        <div className="form">
            <h3>Please SignUp</h3>
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
                <div className="nid">
                    <label className="form__label" for="nid">NID Number </label>
                    <input  type="text" name="" id="nid"  className="form__input"placeholder="NID Number"/>
                </div>
                <div className="mobile">
                    <label className="form__label" for="mobile">Mobile Number </label>
                    <input  type="text" name="" id="mobile"  className="form__input"placeholder="Mobile Number"/>
                </div>
                <div className="address">
                    <label className="form__label" for="address">Address </label>
                    <input  type="text" name="" id="address"  className="form__input"placeholder="Address"/>
                </div>
                <div className="image">
                <label className="form__label" for="image">Image </label>
			    <input className="form__label" type="file" name="file"  />
		        </div>
                <div className="btype">
                <label className="form__label" for="btype">Business Type </label>
                <select className="form__label">
                    <option value="food">Food</option>
                    <option value="elec">Electronics</option>
                    <option value="cloths">Cloths</option>
                </select>
                </div>

                
                
            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
                <h4>Already Registered</h4>
                <button type="submit" class="btn2">Sign In</button>
            </div>
        </div>      
      )       
  }

export default SignUpSeller