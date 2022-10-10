import ServiceRoutes from "./service.routes";
import serviceReducer from './service.reducer';
import * as serviceActions from './service.actions';

export function ServiceClientRoutes() {
	return <ServiceRoutes />;
}

export {
    serviceReducer,
    serviceActions
}