import { Routes, Route, useLocation } from 'react-router-dom';
import PermissionSet from './components/permission-set.component';
import PrivateRoute from '../core/private-route';

function PermissionSetRoutes () {
    return (
        <Routes>
            <Route 
                path="/create" 
                element={
                    <PrivateRoute>
                        <PermissionSet />
                    </PrivateRoute>
                } 
            />
        </Routes>
    );
}

export default PermissionSetRoutes;