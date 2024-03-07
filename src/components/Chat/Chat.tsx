import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage, FormikHelpers, useFormikContext  } from "formik";
import * as yup from "yup";
import Container from "../Container/Container";
import { ButtonContainer, Caption } from "../Form/Form.styled";
import { Loader } from "../Loader/Loader";
import { Button } from "../Styled";
import RootState from "../../redux/RootState";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { UsersStyled } from "./Chat.styled";
import MessageCard from "../MessageCard/MessageCard";
import { FormFields, LoginFormStyled } from "../LoginForm/LoginForm.styled";
import { InputWraper } from "../Form/Input.styled";
import { addMessage } from "../../redux/chat/chatOperations";

interface FormData {
  content: string;
  sender: string;
  imgs: File[];
  chatId: string;
  senderName: string;
}
const schema = yup.object().shape({
  content: yup.string().min(6).max(200).required("Message content is required"),
  imgs: yup.array()
});

function MyForm() {
  const formik = useFormikContext();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;

    if (files) {
      if (files.length <= 3) {
        formik.setFieldValue("imgs", Array.from(files));
        setErrorMessage(null);
      } else {
        const message = "Можна вибрати не більше трьох файлів.";
        console.error(message);
        setErrorMessage(message);
        formik.setFieldValue("imgs", Array.from(files).slice(0, 3));
      }
    } else if (event.currentTarget.value) {
      formik.setFieldValue("imgs", [event.currentTarget.value]);
      setErrorMessage(null);
    } else {
      formik.setFieldValue("imgs", []);
      setErrorMessage(null);
    }
  };

  return (
    <>
      <input
        type="file"
        name="imgs"
        accept=".jpg, .jpeg, .png"
        multiple
        onChange={handleFileChange}
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
    </>
  );
}

function Chat() {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const userId = useSelector((state: RootState) => state.auth.id);
  const senderName = useSelector((state: RootState) => state.auth.name);
  const chat = useSelector((state: RootState) => state.chat.chat);
  const initialValues: FormData = { content: "", imgs: [], sender: "", chatId: "", senderName: "" };
  const isLoading = useSelector((state: RootState) => state.chat.isLoading);

  const addMessageHandle = async (
    values: FormData,
    { resetForm }: FormikHelpers<FormData>
  ) => {
    if (userId && chat?.chatId && senderName) {
      const formData = new FormData();
      const files = values.imgs;
      if (files.length === 1) {
        formData.append("imgs", files[0]);
      } else {
        for (let i = 0; i < files.length; i++) {
          formData.append("imgs", files[i]);
        }
      }
      formData.append("senderName", senderName);
      formData.append("content", values.content);
      formData.append("chatId", chat?.chatId);
      formData.append("sender", userId);

      await dispatch(addMessage(formData));
    }
    resetForm();
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <UsersStyled>
          {chat && chat.messages && chat.messages.length > 0 ? (
            chat.messages?.map((el) => (
              <MessageCard key={el.messageId} Message={el} />
            ))
          ) : (
            <Caption className="sendMessage">Unfortunately, no messages yet.</Caption>
          )}
        </UsersStyled>
      )}

      <LoginFormStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={addMessageHandle}
        >
          <Form autoComplete="off">
            <Caption className="sendMessage">Add message</Caption>
            <FormFields>
              <InputWraper>
                <Field type="text" name="content" placeholder=" " />
                <label htmlFor="content">Message *</label>
                <ErrorMessage
                  className="error"
                  component="div"
                  name="content"
                />
              </InputWraper>
              <MyForm />
              {/* <label htmlFor="imgs">Message *</label> */}
              <ErrorMessage name="imgs" component="div" />
            </FormFields>

            <ButtonContainer>
              <Button className="regLogbutton" type="submit">
                send message
              </Button>
            </ButtonContainer>
          </Form>
        </Formik>
      </LoginFormStyled>
    </Container>
  );
}

export default Chat;
