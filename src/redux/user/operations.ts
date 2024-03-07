import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../auth/authOperations";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ErrorResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      const users = await instance.get('/users');
      return users.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue('An error occurred.');
      }
    }
  }
);