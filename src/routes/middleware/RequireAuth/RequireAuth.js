import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../../ui/Loaders/Loading';
import auth from '../../../firebase.init';

const RequireAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const { user: userState } = useSelector(state => state)
  const location = useLocation();

  if (loading) {
    return <Loader />
  }

  return (
    user
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />
  )
};

export default RequireAuth;