import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from "../merchant";

import './css/style.css';

function App(){
    return(
        <div className='container'>            
            <p className='' style={{textAlign: "right"}}><a href='/marchant/login'>Seller-Login</a></p>
            <Routes>                
                <Route path='/marchant/login' element={<Login/>}/>                
            </Routes>  
        </div> 
    );
}
 
export default App;