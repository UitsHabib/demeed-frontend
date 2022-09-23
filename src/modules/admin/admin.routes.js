import { Routes, Route, useLocation } from 'react-router-dom'

import PermissionTable from './components/permission-table.component'

function AdminRoutes() {
    const { pathname } = useLocation();
    return (
        <Routes>
            <Route exact path={pathname} element={<PermissionTable/>}/>
        </Routes>
    )
}

export default AdminRoutes;