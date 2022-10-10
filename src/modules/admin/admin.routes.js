import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard.component';

function AdminRoutes () { 
    return (
        <Routes>
            <Route 
                path="/dashboard" 
                element={<Dashboard />} 
            />
        </Routes>
    );
}

export default AdminRoutes;