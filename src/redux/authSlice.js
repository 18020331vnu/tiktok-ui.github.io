import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   token: localStorage.getItem('token'),
   isLogin: !!localStorage.getItem('token'),
   user: {},
}

const auth = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
})

const { reducer: authReducer } = auth
export default authReducer
