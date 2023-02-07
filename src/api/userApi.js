import axiosClient from './axiosClient'

const userApi = {
   getSuggest: (params) => {
      const url = '/users/suggested'
      return axiosClient.get(url, { params })
   },
   get: (username) => {
      const url = `/users${username}`
      return axiosClient.get(url)
   },
}
export default userApi
