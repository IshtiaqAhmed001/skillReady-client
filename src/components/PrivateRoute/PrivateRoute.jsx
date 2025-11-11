import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Loader from '../Loader/Loader';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = use(AuthContext);
  
    if(loading){
        return <Loader></Loader>
    }
    else if (user && user.email){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    }
};

export default PrivateRoute;