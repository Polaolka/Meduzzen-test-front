import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RootState from '../redux/RootState';

interface PrivateRouteProps {
  children: JSX.Element;
  children2: JSX.Element;
  redirectTo?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  redirectTo = '/',
}) => {
  const navigate = useNavigate();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  if (!isAuth) {
    navigate(redirectTo);
    return null; 
  }

  return children; 
};
