import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Signup } from '../customer';

function AppComponent() {
    return (
        <Routes>
            <Route path="/customer/signup" element={<Signup />} />
        </Routes>
    );
};

export default AppComponent;