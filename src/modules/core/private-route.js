import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/navbar.component";
import Breadcrumbs from "./components/breadcrumb.component";

function PrivateRoute({ children }) {
    const location = useLocation();
    const loggedInUser = useSelector((state) => state.userReducer.loggedInUser);

    if (!loggedInUser) {
        return <Navigate to='/admin/login' replace />
    }

    return (
        <>
            <Navbar path={location.pathname}/>
            {/* <Breadcrumbs /> */}
            <Outlet />
        </>
    );
}

export default PrivateRoute;