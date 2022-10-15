import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../../ui/Loaders/Loading';

const RequirePayment = () => {
    const { paymentStatus, eventCofirmed } = useSelector(state => state.user)
    const location = useLocation()

    if (paymentStatus === undefined) {
        return <Loader />
    }

    return (
        !paymentStatus
            ? <Navigate to="/membership" state={{ from: location }} replace />
            : <Outlet />
    )
}

export default RequirePayment