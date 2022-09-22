import { useLocation, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function CustomerRoutes() {
    const { pathname } = useLocation();
    
    return (
        <Routes>
            <Route path={pathname} element={<Signup />} />
        </Routes>
    )
};

export default CustomerRoutes;