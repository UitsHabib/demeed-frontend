import React from "react";
import { Routes, Route  } from 'react-router-dom';

import { Login, AdminClientRoutes } from "../admin";
import { PermissionSet, CreateUser } from '../permission-set';

function App() {
    return (
      <div className="app">
         <div className="container">
            <Routes>
                <Route path="admin/login" element={ <Login />} />

                <Route path="/admin/permission-set/create" element={<PermissionSet />} />

                <Route path="/admin/permission-set/create/successful" element={<CreateUser />} />
            </Routes>
         </div>
      </div>
    );
}
 
export default App;