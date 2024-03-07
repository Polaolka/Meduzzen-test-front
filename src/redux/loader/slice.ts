import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../user/operations";
import { openChat } from "../chat/chatOperations"

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(openChat.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(openChat.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(openChat.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const loadingReducer = loadingSlice.reducer;
export const loadingActions = loadingSlice.actions;
export type { LoadingState };
export default loadingSlice;