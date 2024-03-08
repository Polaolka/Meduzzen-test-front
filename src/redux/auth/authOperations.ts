import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ErrorResponse } from "react-router-dom";

// const BASE_URL = "http://localhost:4000/api/v0/";
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const BASE_URL = REACT_APP_BASE_URL || "https://meduzzen-test-back.onrender.com/api/v0/";

export interface ILoginUserDTO {
  email: string; 
  password: string
}

export interface ILogoutUserDTO {
  id: string; 
}

export interface IRegisterUserDTO {
  email: string; 
  password: string;
  name:  string;
} 

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const setToken = (token: string) => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = "";
};

const clearToken = () => {
  instance.defaults.headers.common.authorization = null;
};

instance.interceptors.response.use(
  (response) => response,
  async (error) => {

    const storedAccessToken = localStorage.getItem('accessToken')

    if (error.response.status === 401) {
      const storedRefreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post("/auth/refresh", {
          refreshToken: storedRefreshToken,
        });

        setToken(data.accessToken);

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        const updatedConfig = { ...error.config };

        updatedConfig.headers.Authorization = `Bearer ${data.accessToken}`;

        if (error.config.url !== "/auth/current") {
          return instance(error.config);
        }
        return instance(updatedConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    if (error.response.status === 403 && storedAccessToken) {
      localStorage.setItem('accessToken', '');
      localStorage.setItem('refreshToken', '');
      // window.location.replace(`${process.env.REACT_APP_BASEURL}/signin`);
    }
    return Promise.reject(error);
  }
);

export default instance;

export const currentUser = createAsyncThunk(
  "user/currentUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const accessToken = localStorage.getItem('accessToken')
      if (!accessToken) {
        return rejectWithValue("Unable to fetch user");
      }
      setToken(accessToken);
      const result = await instance.get("/auth/current");
      return result.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue("An error occurred.");
      }
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (data: ILogoutUserDTO, thunkAPI) => {
  try {
    await instance.post("/auth/logout", {data});
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
    clearToken();
  } catch (error: ErrorResponse | any) {
    if (error.response && error.response.data) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    } else {
      return thunkAPI.rejectWithValue("An error occurred.");
    }
  }
});

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (registerUserDTO: IRegisterUserDTO, thunkAPI) => {
    try {
      const resRegister = await instance.post('/auth/register', registerUserDTO);
      console.log("resRegister.data:", resRegister.data);
      setToken(resRegister.data.accessToken);
      localStorage.setItem('refreshToken', resRegister.data.refreshToken);
      localStorage.setItem('accessToken', resRegister.data.accessToken);
      return resRegister.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);

export const logInUser = createAsyncThunk(
  'users/logInUser',
  async (loginUserDTO: ILoginUserDTO, thunkAPI) => {
    try {
      const resRegister = await instance.post('/auth/login', loginUserDTO);

      setToken(resRegister.data.accessToken);
      localStorage.setItem('refreshToken', resRegister.data.refreshToken);
      localStorage.setItem('accessToken', resRegister.data.accessToken);
      return resRegister.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);

export const refreshUser = createAsyncThunk(
  'users/refreshUser',
  async (credentials, thunkAPI) => {
    try {
      const resRegister = await instance.post('/auth/refresh', credentials);
      console.log("resRegister.data:", resRegister.data);
      return resRegister.data;
    } catch (error: ErrorResponse | any) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      } else {
        return thunkAPI.rejectWithValue("An error occurred.");
      }
    }
  }
);