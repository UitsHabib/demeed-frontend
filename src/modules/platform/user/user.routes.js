import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../core/private-route";

import Dashboard from "./components/dashboard/dashboard.component";
import Users from './components/users.component';

function UserRoutes() {
    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    // <PrivateRoute >
                        <Dashboard/>
                    // </PrivateRoute>
                }
            />
			<Route 
				path="/users"
				element={
					<PrivateRoute>
						<Users />
					</PrivateRoute>
				}
			/>
        </Routes>
    );
}

export default UserRoutes;