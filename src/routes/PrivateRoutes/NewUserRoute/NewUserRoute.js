import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loader from '../../../ui/Loaders/Loading';

const NewUserRoute = () => {
    const { user: userState } = useSelector(state => state);
    const location = useLocation()

    if(userState?.status === undefined){
        return <Loader/>
    }
    
    return userState?.status === 'new-user' ? <Outlet /> : <Navigate to={userState?.path || '/'}/>
}

export default NewUserRoute