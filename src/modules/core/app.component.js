import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import PublicRoute from "./public-route";
import join from "url-join";
import NoMatch from "./no-match";

import { Dashboard, Login, Logout, ForgotPassword, ResetPassword, PlatformRoutes, MyProfile, UpdateMyProfile, userActions } from '../platform';
import ServiceList from "./components/service-list.component";
const { getSignedInUserProfile } = userActions;

let refCount = 0;

function setLoading(isLoading) {
    if (isLoading) {
        refCount++;
        document.getElementById("loader").style = "display: block";
    } else if (refCount > 0) {
        refCount--;
        if (refCount > 0)
            document.getElementById("loader").style = "display: block";
        else document.getElementById("loader").style = "display: none";
    }
}

axios.interceptors.request.use(
    (config) => {
        setLoading(true);
        return config;
    },
    (error) => {
        setLoading(false);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        setLoading(false);
        return response;
    },
    (error) => {
        setLoading(false);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        const loggedInUser = useSelector(
            (state) => state.userReducer.loggedInUser
        );

        if (error.response && error.response.status === 401 && loggedInUser)
            window.location = "/admin/login";

        return Promise.reject(error);
    }
);

axios.interceptors.request.use(function (config) {
    const isAbsoluteURLRegex = /^(?:\w+:)\/\//;
    const baseUrl = "http://localhost:4000";

    if (!isAbsoluteURLRegex.test(config.url)) {
        config.url = join(baseUrl, config.url);
    }

    config.withCredentials = true;

    return config;
});

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSignedInUserProfile());
    }, []);

    return (
        <>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Navigate to="/admin/login" />}/>
                <Route 
                    path="/admin/login" 
                    element={
                        <PublicRoute>
                            <Login/>
                        </PublicRoute>
                    }
                />
                <Route path="/admin/logout" element={<Logout />} />
                <Route path="/admin/reset-password" element={<ResetPassword />} />
                <Route path="/admin/forgot-password" element={<ForgotPassword />} />
                <Route path="/admin/*" element={<PlatformRoutes/>} />

                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
}
 
export default App;
 