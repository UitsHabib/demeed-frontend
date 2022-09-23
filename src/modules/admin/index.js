import React from "react";

import AdminRoutes from "./admin.routes";
import PermissionTable from "./components/permission-table.component";

export function AdminClientRoutes(props) {
    return <AdminRoutes path={props.path}/>
}

export { PermissionTable };