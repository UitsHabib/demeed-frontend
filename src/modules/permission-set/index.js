import React from "react";

import AdminRoutes from "./permission-set.routes";
import PermissionSet from "./components/permission-set.component";
import CreateUser from "./components/create-user.component";

export const AdminClientRoutes = props =>  <AdminRoutes path={props.path} />;

export { PermissionSet, CreateUser };