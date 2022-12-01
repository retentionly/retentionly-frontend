import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Layout from '../../../layout';
import { HeaderMain } from '../../../layout/Header';
import Loader from '../../../ui/Loaders/Loading';

const RequireAuth = () => {
  const [user, loading] = useAuthState(auth);
  // const { user: userState } = useSelector(state => state)
  const location = useLocation();

  if (loading) {
    return <Loader />
  }

  return (
    user
      ? <>
        <HeaderMain />
        <Layout />
      </>
      : <Navigate to="/login" state={{ from: location }} replace />
  )
};

export default RequireAuth;