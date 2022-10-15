import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Layout from '../Layout';
// const useAuth=()=>{
//   const user=localStorage.getItem('user')
//   if(user){
//     return true
//   } else {
//     return false
//   }
// }

const  PublicRoutes=(props) =>{
    // const location = useLocation();
    const [user] = useAuthState(auth);
//  cons
  return user ? <Navigate to="/goals"/> : <Layout/>
}

export default PublicRoutes;