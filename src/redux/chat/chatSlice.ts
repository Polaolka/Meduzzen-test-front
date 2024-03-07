import { AsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addMessage, deleteMessage, editMessage, openChat } from "./chatOperations";

interface IMessage {
  messageId: string | null;
  content: string;
  sender: string;
  imgs: string[];
  senderName: string;
  createdAt: Date;
}

interface IChat {
  chatId: string | null;
  participants:
    | {
        user1: string;
        user2: string;
      }
    | {};
  messages: IMessage[] | [];
}

interface IChatState {
  chats: IChat[] | null;
  chat: IChat | null;
  messages: IMessage[] | [];
  message: IMessage | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IChatState = {
  chats: null,
  chat: null,
  messages: [],
  message: null,
  isLoading: false,
  error: null,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AsyncThunkPayload<T> = T extends AsyncThunk<infer P, any, infer Config>
  ? P | undefined
  : never;

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(openChat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        openChat.fulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<AsyncThunkPayload<typeof openChat> | undefined>
        ) => {
          state.isLoading = false;
          state.chat = payload;
        }
      )
      .addCase(openChat.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addMessage.fulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<AsyncThunkPayload<typeof addMessage> | undefined>
        ) => {
          console.log(payload);
          
          state.isLoading = false;
          if (payload !== undefined) {
            state.chat!.messages = payload.messages
          }
        }
      )
      .addCase(addMessage.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteMessage.fulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<AsyncThunkPayload<typeof deleteMessage> | undefined>
        ) => {
          state.isLoading = false;
          if (payload !== undefined) {
            state.chat!.messages = payload.messages
          }
        }
      )
      .addCase(deleteMessage.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        editMessage.fulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<AsyncThunkPayload<typeof editMessage> | undefined>
        ) => {
          state.isLoading = false;
          if (payload !== undefined) {

            state.chat!.messages = payload.messages
          }
        }
      )
      .addCase(editMessage.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const chatReducer = chatSlice.reducer;

export const chatActions = chatSlice.actions;
export type { IMessage, IChat, IChatState };
export default chatSlice;
