import axiosClient from './axiosClient'

const followApi = {
   getFollowingList: (params) => {
      const url = '/me/followings'
      return axiosClient.get(url, { params })
   },
}
export default followApi
