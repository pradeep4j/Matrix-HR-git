import React from 'react';
import { Navigate } from 'react-router-dom';
import { isUserLoggedIn } from '../utils/localStorage';

const PrivateRoute = ({ children }) => {
 // const navigate = useNavigate();
  if (isUserLoggedIn()===false) {
       //alert(!isUserLoggedIn());
    // user is not authenticated
    return <Navigate to="/" />;
   
  }
  return children;
};

export default PrivateRoute;