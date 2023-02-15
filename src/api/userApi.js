import axiosClient from './axiosClient'

const userApi = {
   getSuggest: (params) => {
      const url = '/users/suggested'
      return axiosClient.get(url, { params })
   },
   get: (nickname) => {
      const url = `/users/@${nickname}`
      return axiosClient.get(url)
   },
}
export default userApi
