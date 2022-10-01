import React from "react";
import { Route, Navigate } from "react-router-dom";


function PublicRoute({ component: Component, ...rest }) {
    console.log("-------------------------------------------",Component,rest);
    const loggedInUser = localStorage.getItem('access_token');

    return loggedInUser ? <Navigate to="/admin/homepage" /> : <Route {...rest} element={ <Component />} />;
}

export default PublicRoute;