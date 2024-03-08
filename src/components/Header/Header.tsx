import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HeaderLinksBox,
  HeaderStyled,
  HeaderWrapper,
  HelloStyled,
  LogInBtn,
  LogInIcon,
  LogOutIcon,
  RegistrationBtn,
} from "./Header.styled";
import Container from "../Container/Container";

import { RegisterForm } from "../RegisterForm/RegisterForm";
import Modal from "../Modal/Modal";
import { logOut } from "../../redux/auth/authOperations";
import LoginForm from "../LoginForm/LoginForm";
import RootState from "../../redux/RootState";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import Logo from "../Logo/Logo";

function Header() {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const login = useSelector((state: RootState) => state.auth.name);
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);
  const [isRegModalOpened, setIsRegModalOpened] = useState(false);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const userId = useSelector((state: RootState) => state.auth.id);

  const openRegisterModal = () => {
    setIsRegModalOpened(true);
  };

  const openLoginModal = () => {
    setIsLoginModalOpened(true);
  };

  const logOuthandle = () => {
    if (userId) {
      
      dispatch(logOut({id: userId}));
    }
  };
  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderWrapper>
            <Logo />
            <HeaderLinksBox>
            {!isAuth ? (
                    <>
                      <LogInBtn type="button" onClick={openLoginModal}>
                        <LogInIcon />
                        Log in
                      </LogInBtn>
                      <RegistrationBtn
                        type="button"
                        onClick={openRegisterModal}
                      >
                        Registration
                      </RegistrationBtn>
                    </>
                  ) : (
                    <>
                      <HelloStyled>Hello, {login}!</HelloStyled>
                      <LogInBtn type="button" onClick={logOuthandle}>
                        <LogOutIcon />
                        Log out
                      </LogInBtn>
                    </>
                  )}
            </HeaderLinksBox>
          </HeaderWrapper>
        </Container>
      </HeaderStyled>
      <Modal active={isLoginModalOpened} setActive={setIsLoginModalOpened}>
        <LoginForm setIsLoginModalOpened={setIsLoginModalOpened} />
      </Modal>
      <Modal active={isRegModalOpened} setActive={setIsRegModalOpened}>
        <RegisterForm setIsRegModalOpened={setIsRegModalOpened} />
      </Modal>
    </>
  );
}

export default Header;
