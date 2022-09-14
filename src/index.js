import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Profile from './profile.component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/navbar.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Navbar/>
        <Profile/>
    </>
   
);