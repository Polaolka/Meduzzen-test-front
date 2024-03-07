import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { ILoginUserDTO, logInUser } from "../../redux/auth/authOperations";

import { Caption, ButtonContainer, SupportingText } from "../Form/Form.styled";
import { InputWraper } from "../Form/Input.styled";
import { Button } from "../Styled/index";
import { FormFields, LoginFormStyled } from "./LoginForm.styled";
import Message from "../Message/Message";
import ShowPassword from "../ShowPassword/ShowPassword";
import RootState from "../../redux/RootState";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

interface LoginFormProps {
  setIsLoginModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsLoginModalOpened }) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { email: "", password: "" };

  const schema = yup.object().shape({
    email: yup.string().min(6).max(100).required(),
    password: yup.string().min(4).max(16).required(),
  });

  const handleSubmit = (values: { email: string; password: string }, { resetForm }: any) => {
    dispatch(logInUser({ ...values } as ILoginUserDTO));
    setIsLoginModalOpened(false);
    navigate("/");
    resetForm();
  };

  const onClickHandler = () => {
    setPasswordShown((state) => !state);
  };
  const message = useSelector((state: RootState) => state.auth.error);


  return (
    <LoginFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Login</Caption>
          <SupportingText>
            Please login and continue your conversation.
          </SupportingText>
          <FormFields>
            <InputWraper>
              <Field type="text" name="email" placeholder=" " />
              <label htmlFor="email">Email *</label>
              <ErrorMessage className="error" component="div" name="email" />
            </InputWraper>

            <InputWraper>
              <ShowPassword
                clickHandler={onClickHandler}
                isShown={passwordShown}
              />
              <Field
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder=" "
              />
              <label htmlFor="password">Password *</label>
              <ErrorMessage
                className="error"
                component="div"
                name="password"
              />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Log In
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message type="error">{message}</Message>}
    </LoginFormStyled>
  );
};

export default LoginForm;
