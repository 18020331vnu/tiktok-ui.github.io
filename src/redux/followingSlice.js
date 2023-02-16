import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import followApi from '../api/followApi'

export const getAllFollowing = createAsyncThunk(
   'following/getAllFollowing',
   async () => {
      let followingList = []
      let page = 1
      while (true) {
         const response = await followApi.getFollowingList({
            page,
         })
         if (response.data.length === 0) {
            break
         } else {
            followingList = [
               ...followingList,
               ...response.data.map((user) => {
                  return {
                     id: user.id,
                     followers: user.followers_count,
                     likes: user.likes_count,
                  }
               }),
            ]
            page++
         }
      }
      return followingList
   }
)

const following = createSlice({
   name: 'following',
   initialState: [],
   reducers: {
      follow: (state, action) => {
         return [...state, action.payload]
      },
      unfollow: (state, action) => {
         return state.filter((user) => user.id !== action.payload.id)
      },
   },
   extraReducers: {
      [getAllFollowing.fulfilled]: (state, action) => {
         state.push(...action.payload)
      },
   },
})

const { actions, reducer } = following
export const { setFollowingList, follow, unfollow } = actions
export default reducer
