import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/User/user';


export const store = configureStore({
  reducer: {
    user: userReducer
  }
});