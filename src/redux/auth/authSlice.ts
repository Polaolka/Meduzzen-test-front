import { createSlice, PayloadAction, AsyncThunk } from "@reduxjs/toolkit";
import {
  registerUser,
  logInUser,
  logOut,
  currentUser,
  refreshUser
} from "./authOperations";


interface IAuthState {
  id: string | null;
  email: string | null;
  name: string | null;
  isAuth: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  id: null,
  email: null,
  name: null,
  isAuth: false,
  error: null,
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AsyncThunkPayload<T> = T extends AsyncThunk<infer P, any, infer Config> ? P : never;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof registerUser>>) => {
        const { name, email, id } = payload;
        state.id = id;
        state.name = name;
        state.email = email;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof registerUser> | undefined>) => {
        // payload тепер може бути undefined, робимо перевірку
        state.error = payload ? String(payload) : null;
      })
      .addCase(logInUser.fulfilled, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof logInUser>>) => {
        const { name, email, id } = payload;
        state.id = id;
        state.name = name;
        state.email = email;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(logInUser.rejected, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof logInUser> | undefined>) => {
        state.error = payload ? String(payload) : null;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof refreshUser>>) => {
        console.log("payload:", payload);
        const { name, email, id } = payload;
        state.id = id;
        state.name = name;
        state.email = email;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(refreshUser.rejected, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof refreshUser> | undefined>) => {
        state.error = payload ? String(payload) : null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.id = null;
        state.name = null;
        state.email = null;
        state.isAuth = false;
      })
      .addCase(logOut.rejected, (state) => {
        state.id = null;
        state.name = null;
        state.email = null;
        state.isAuth = false;
      })
      .addCase(currentUser.fulfilled, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof currentUser>>) => {
        const { name, email, id } = payload;
        state.id = id;
        state.name = name;
        state.email = email;
        state.isAuth = true;
        state.error = null;
      })
      .addCase(currentUser.rejected, (state, { payload }: PayloadAction<AsyncThunkPayload<typeof currentUser> | undefined>) => {
        state.error = payload ? String(payload) : null;
        state.isAuth = false;
      })
      .addCase(currentUser.pending, (state) => {})
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
export type { IAuthState };
export default authSlice;