import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useGetAdminQuery } from '../../../features/admin/adminApi';
import auth from '../../../firebase.init';
import Loader from '../../../ui/Loaders/Loading';

const RequireAdmin = () => {
    const [user, loading, error] = useAuthState(auth);
    const { data, isLoading, isError } = useGetAdminQuery(user?.email)
    const { admin, user: userState } = useSelector(state => state)
    const location = useLocation();

    if (isLoading || admin === undefined) {
        return <Loader />
    }

    return (
        userState?.role === 'admin' ? <Outlet /> : <Navigate to="/login" />
    )
}

export default RequireAdmin