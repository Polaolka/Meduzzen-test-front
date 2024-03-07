import React, { useEffect } from "react";
import { HomePageStyled } from "../components/Styled/HomePage.styled";
import { useParams } from "react-router-dom";
import { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { openChat } from "../redux/chat/chatOperations"; 
import Chat from "../components/Chat/Chat";
import RootState from "../redux/RootState";

const ChatPage = () => {
  const dispatch = useDispatch<ThunkDispatch<{}, {}, UnknownAction>>();
  const { chatId } = useParams();

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    
  useEffect(() => {
    if (chatId) {
      dispatch(openChat({ chatId }));
    }
  }, [dispatch, chatId]);
  return (
    <HomePageStyled>
      {isAuth && <Chat/>}
       {/* <Chat/>Додати перевірку на юзера!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    </HomePageStyled>
  );
};

export default ChatPage;