import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

import { FormFields, RegisterFormStyled } from "./RegisterForm.styled";
import {
  Caption,
  ButtonContainer,
  SupportingText,
} from "../Form/Form.styled";
import { InputWraper } from "../Form/Input.styled";
import { Button } from "../Styled";
import { IRegisterUserDTO, registerUser } from "../../redux/auth/authOperations";
import Message from "../Message/Message";
import ShowPassword from "../ShowPassword/ShowPassword";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import RootState from "../../redux/RootState";
interface LoginFormProps {
  setIsRegModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
export const RegisterForm: React.FC<LoginFormProps> = ({ setIsRegModalOpened }) => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const initialValues = { name: "", email: "", password: "" };

  const handleSubmit = (values: { email: string; password: string, name: string }, { resetForm }: any) => {
    dispatch(registerUser({ ...values } as IRegisterUserDTO));
    setIsRegModalOpened(false);
    navigate("/");
    resetForm();
  };

  const schema = yup.object().shape({
    name: yup.string().min(2).max(100).required(),
    email: yup.string().min(6).max(100).required(),
    password: yup.string().min(4).max(100).required(),
  });
  
  const message = useSelector((state: RootState) => state.auth.error);
  console.log("message:", message);


  const onClickHandler = () => {
    setPasswordShown((state) => !state);
  };

  return (
    <RegisterFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <Caption>Registration</Caption>
          <SupportingText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </SupportingText>
          <FormFields>
            <InputWraper>
              <Field type="text" name="name" placeholder=" " />
              <label htmlFor="name">Name *</label>
              <ErrorMessage className="error" component="div" name="name" />
            </InputWraper>

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
              <ErrorMessage className="error" component="div" name="password" />
            </InputWraper>
          </FormFields>
          <ButtonContainer>
            <Button className="orange regLogbutton" type="submit">
              Sign Up
            </Button>
          </ButtonContainer>
        </Form>
      </Formik>
      {message && <Message type="error">{message}</Message>}
    </RegisterFormStyled>
  );
};
