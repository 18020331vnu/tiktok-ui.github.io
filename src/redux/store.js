import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import followingReducer from './followingSlice'

const store = configureStore({
   reducer: {
      following: followingReducer,
      auth: authReducer,
   },
})

export default store
