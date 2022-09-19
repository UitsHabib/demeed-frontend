import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/login.component';

function AdminRoutes() {
    const { pathname } = useLocation();
    return (
        <Routes>
            <Route exact path={pathname} element={<Login />} />
        </Routes>
    );
}

export default AdminRoutes;