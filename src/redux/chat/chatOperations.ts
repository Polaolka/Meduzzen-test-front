import { createAsyncThunk } from "@reduxjs/toolkit";
import instance, { setToken } from "../auth/authOperations";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

interface IOpenChatDTO {
  chatId: string,
}

export interface IAddMessageDTO {
  content: string;
  sender: string;
  imgs: File[];
  chatId: string;
}

export interface IDeleteMessageDTO {
  messageId: string; 
  userId: string; 
  chatId: string;
}

export interface IEditMessageDTO {
  content: string; 
  userId: string; 
  chatId: string; 
  messageId: string; 
}

export const openChat = createAsyncThunk(
  "chats/openChat",
  async (openChatDTO: IOpenChatDTO, thunkAPI) => {
    const accessToken = localStorage.getItem('accessToken') || "";
    setToken(accessToken);
    try {
      const chat = await instance.post("/chats/chat", openChatDTO);
      return chat.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);

export const addMessage = createAsyncThunk(
  "chats/addMessage",
  async (formData: FormData, thunkAPI) => {
    try {
      const accessToken = localStorage.getItem('accessToken') || "";
      setToken(accessToken);
      const chat = await instance.post("/chats/new-message", formData);
      
      return chat.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);

export const deleteMessage = createAsyncThunk(
  "chats/deleteMessage",
  async (deleteMessageDTO: IDeleteMessageDTO, thunkAPI) => {
    try {
      const { messageId, userId, chatId } = deleteMessageDTO
      const accessToken = localStorage.getItem('accessToken') || "";
      setToken(accessToken);
      const chat = await instance.delete(`/chats/delete/${messageId}`, { data: { userId, chatId } });
      console.log("chat.data.updatedChatData:", chat.data.updatedChatData);
      
      return chat.data.updatedChatData;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);

export const editMessage = createAsyncThunk(
  "chats/editMessage",
  async (deleteMessageDTO: IEditMessageDTO, thunkAPI) => {
    try {
      const { content, userId, chatId, messageId } = deleteMessageDTO
      const accessToken = localStorage.getItem('accessToken') || "";
      setToken(accessToken);
      const chat = await instance.patch(`/chats/edit/${messageId}`, { data: { content, chatId, userId, messageId } });
      return chat.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);