import { useLocation, Route, Routes } from 'react-router-dom';
import Singup from './components/singup';

function CustomerRoutes() {
    const { pathname } = useLocation();
    
    return (
        <Routes>
            <Route path={pathname} element={<Singup />} />
        </Routes>
    )
};

export default CustomerRoutes;