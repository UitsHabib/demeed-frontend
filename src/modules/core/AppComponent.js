import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Singup, CustomerClientRoutes } from '../customer';

function AppComponent() {
    return (
        <Routes>
            <Route path="/customer/singup" element={<Singup />} />
        </Routes>
    );
};

export default AppComponent;