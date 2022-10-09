import React from "react";

import PermissionSetRoutes from "./permission-set.routes";
import PermissionSet from "./components/permission-set.component";
import CreateUser from "./components/create-user.component";

export function PermissionSetClientRoutes () {
    return <PermissionSetRoutes />;
}

export { PermissionSet, CreateUser };