
import React, { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import { AppStyled } from './App.styled';
import SharedLayout from '../SharedLayout/SharedLayout';
import { currentUser } from '../../redux/auth/authOperations';
import { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { getUsers } from '../../redux/user/operations';

import RootState from '../../redux/RootState';
const HomePage = lazy(() => import('../../pages/HomePage'));
const ChatPage = lazy(() => import('../../pages/ChatPage'));

const App: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
    <AppStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="chat/:chatId"
            element={isAuth ? (<ChatPage />): (<HomePage />)
            }
          />
        </Route>
      </Routes>
    </AppStyled>
          <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            duration: 4000,
            style: {
              background: "#fff",
              color: "#363636",
            },
          }}
        />
        </>
  );
};

export default App;

