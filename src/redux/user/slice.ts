import { createSlice, PayloadAction, AsyncThunk } from "@reduxjs/toolkit";
import {  getUsers } from "./operations";

interface User {
  id: string;
  name: string;
  email: string;
}

interface IUserState {
  users: User[] | [];
  error: string | null;
}

const initialState: IUserState = {
  users: [],
  error: null,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AsyncThunkPayload<T> = T extends AsyncThunk<infer P, any, infer Config> ? P : never;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof getUsers>>) => {
        state.users = payload;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof getUsers> | undefined>) => {
        state.error = payload ? String(payload) : null;;
      })
  },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;
export type { IUserState, User };
export default userSlice;
