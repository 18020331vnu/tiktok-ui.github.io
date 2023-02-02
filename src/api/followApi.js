import axiosClient from './axiosClient'

const followApi = {
   getFollowingList: (params) => {
      const url = '/me/followings'
      return axiosClient.get(url, { params })
   },
   followUser: (userId) => {
      const url = `users/${userId}/follow`
      return axiosClient.post(url)
   },
   unfollowUser: (userId) => {
      const url = `users/${userId}/unfollow`
      return axiosClient.post(url)
   },
}
export default followApi
