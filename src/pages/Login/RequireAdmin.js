import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loader from '../../shared/Loader/Loader';

const RequireAuth = ({children}) => {
   const [user, loading] = useAuthState(auth);
   const [admin, adminLoading] = useAdmin(user)
   const location = useLocation();
   
   if(loading || adminLoading){
       return <Loader></Loader>
   }

   if(!user || !admin) {
       signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;

   }
    return children;
};

export default RequireAuth;