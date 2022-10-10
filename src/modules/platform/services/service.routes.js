import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from "../../core/private-route";
import Services from './components/services.component';

const ServiceRoutes = () => {
	return (
		<Routes>
			<Route 
				path="/services"
				element={
					<PrivateRoute>
						<Services />
					</PrivateRoute>
				}
			/>
        </Routes>
	);
};

export default ServiceRoutes;