import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../core/private-route";
import Dashboard from "./components/dashboard/dashboard.component";
import Login from './components/login.component';

function AdminRoutes() {
    return (
        <Routes>
            <Route 
                path="/dashboard" 
                element={
                    <PrivateRoute >
                        <Dashboard/>
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default AdminRoutes;