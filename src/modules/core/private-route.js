import React from "react";
import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    const loggedInUser = localStorage.getItem('access_token');

    return loggedInUser ?  <Route {...rest} element={ <Component />} /> : <Navigate to="/admin/login" /> ;
}

export default PrivateRoute;