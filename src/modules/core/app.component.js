import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from "../merchant";

import './css/style.css';

function App(){
    return(
        <div className='container'>            
            <p className='' style={{textAlign: "right"}}><a href='/merchant/login'>Seller-Login</a></p>
            <Routes>                
                <Route path='/merchant/login' element={<Login/>}/>                
            </Routes>  
        </div> 
    );
}
 
export default App;