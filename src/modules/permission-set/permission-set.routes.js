import { Routes, Route, useLocation } from 'react-router-dom';
import PermissionSet from './components/permission-set.component';

function PermissionSetRoutes () {
    const { pathname } = useLocation();

    return (
        <Routes>
            <Route path={pathname} element={<PermissionSet />} />
        </Routes>
    );
}

export default PermissionSetRoutes;