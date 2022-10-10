import React, { Component } from "react";
import AdminLogin from "./components/AdminLoginComponent";
import {BrowserRouter, Routes, Route, Redirect  } from 'react-router-dom';

function App() {
    return (
      <div>
        <BrowserRouter>
         <Routes>
            <Route exact path="/login" element={<AdminLogin />} />
         </Routes>
        </BrowserRouter>
      </div>
    );
}
 
export default App;
 