import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../../ui/Loaders/Loading';

const RequireConfirmedUser = () => {
    const { eventConfirmed } = useSelector(state => state.user)
    const location = useLocation()

    if (eventConfirmed === undefined) {
        return <Loader />
    }

    return (
        !eventConfirmed
            ? <Navigate to="/" state={{ from: location }} replace />
            : <Outlet />
    )
}

export default RequireConfirmedUser