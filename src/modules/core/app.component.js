import React from "react";
import { Routes, Route, Navigate  } from 'react-router-dom';

import { Login, AdminClientRoutes } from "../admin";
import { PermissionSetClientRoutes, CreateUser } from '../permission-set';
import PublicRoute from "./public-route";

function App() {
    return (
      <div className="app">
         <div className="container">
            <Routes>
                <Route path="/" element={<Navigate to="/admin/login" />} />
                <Route 
                    path="/admin/login" 
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />
                
                <Route path="/admin/permission-set/*" element={<PermissionSetClientRoutes />} />
                <Route 
                    path="/admin/permission-set/create/successful" 
                    element={
                        <CreateUser />
                    } 
                />
            </Routes>
         </div>
      </div>
    );
}
 
export default App;
