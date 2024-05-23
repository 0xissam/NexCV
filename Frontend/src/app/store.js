import { configureStore } from '@reduxjs/toolkit'
import userReducer, { userSlice } from '../features/User/user';


export const store = configureStore({
  reducer: {
    user: userReducer 
  },
})