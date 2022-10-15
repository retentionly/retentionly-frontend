import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Layout from '../Layout';


const PrivateRoutes=(props) =>{
    // const location = useLocation();
    const [user] = useAuthState(auth);
    return user ?  <Layout/>: <Navigate to="/login"/> ;
}

export default PrivateRoutes;