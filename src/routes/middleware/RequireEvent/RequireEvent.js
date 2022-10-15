import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Loader from '../../../ui/Loaders/Loading'
import auth from '../../../firebase.init'

const RequireEvent = () => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    const { event } = useSelector(state => state.event);

    if (loading || event === undefined) {
        return <Loader />
    }

    return (
        user && event
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    )
}

export default RequireEvent