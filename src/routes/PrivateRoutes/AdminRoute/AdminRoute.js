import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../../ui/Loaders/Loading';

const AdminRoute = () => {
    const { user: userState } = useSelector(state => state);
    const location = useLocation()

    if (userState?.status === undefined) {
        return <Loader />
    }

    return userState?.status === 'admin' ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace/>
}

export default AdminRoute