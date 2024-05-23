import { configureStore } from '@reduxjs/toolkit'
<<<<<<< HEAD
import userReducer, { userSlice } from '../features/User/user';


export const store = configureStore({
  reducer: {
    user: userReducer 
=======
import userReducer from '../features/User/user';

export const store = configureStore({
  reducer: {
    user: userReducer
>>>>>>> 595cfb0 (login requests)
  },
})