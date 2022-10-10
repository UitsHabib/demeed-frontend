import React from 'react';

import { UserClientRoutes, Login, Logout, Dashboard, ForgotPassword, ResetPassword, MyProfile, UserForm, UpdateMyProfile, userReducer, userActions } from './user';
import { ServiceClientRoutes, serviceReducer, serviceActions } from './services';

export function PlatformRoutes() {
    return (
        <>
            <UserClientRoutes />
            <ServiceClientRoutes />
        </>
    );
}

export { 
    Login, 
    Logout, 
    Dashboard, 
    ForgotPassword, ResetPassword, MyProfile, UserForm,
    UpdateMyProfile, userReducer, 
    userActions,
    serviceReducer,
    serviceActions
};
