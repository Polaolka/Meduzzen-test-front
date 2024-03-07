import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RootState from '../redux/RootState';
import HomePage from '../pages/HomePage';

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
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import RootState from '../redux/RootState';

// interface PrivateRouteProps {
//   component: React.ComponentType<any>;
//   redirectTo?: string;
// }

// export const PrivateRoute: React.FC<PrivateRouteProps> = ({
//   component: Component,
//   redirectTo = '/',
// }) => {
//   const navigate = useNavigate();
//   const isAuth = useSelector((state: RootState) => state.auth.isAuth);

//   if (!isAuth) {
//     navigate(redirectTo);
//     return null; // або відобразіть щось інше, якщо потрібно
//   }

//   return React.createElement(Component);
// };

// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import RootState from '../redux/RootState';

// interface PrivateRouteProps {
//   path: string;
//   element: React.ReactNode;
//   redirectTo?: string;
// }

// export const PrivateRoute: React.FC<PrivateRouteProps> = ({
//   path,
//   element,
//   redirectTo = '/login',
// }) => {
//   const isAuth = useSelector((state: RootState) => state.auth.isAuth);

//   return isAuth ? <Route path={path} element={element} /> : <Navigate to={redirectTo} />;
// };