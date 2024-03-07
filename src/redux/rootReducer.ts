import { combineReducers } from '@reduxjs/toolkit';
// import authReducer from './auth/authSlice';
import { chatReducer } from './chat/chatSlice';
import { userReducer } from './user/slice';
import { authReducer } from './auth/authSlice';


// import userReducer from './user/userSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  user: userReducer,

});

export default rootReducer;

