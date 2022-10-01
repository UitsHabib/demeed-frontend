import React from "react";
import { Routes, Route, Switch  } from 'react-router-dom';
import { Login } from "../admin";
import { AdminHomepage } from "../admin-home-page";
import Protected from './components/protected.component';

import PublicRoute from "./public-route";
import PrivateRoute from "./private-route";


function App() {
    return (
      <div>
         <PublicRoute 
            path="/admin/login"
            component={Login}
         />
         <PrivateRoute 
            path="/admin/homepage"
            component={AdminHomepage}
         />
         {/* <Route path="/admin/login" element={ <Login />} />
         <Route path="/admin/homepage" element = { <Protected Cmp={AdminHomepage}/> } />   */}
      </div>
    );
}
 
export default App;
 