import axiosClient from './axiosClient'

const userApi = {
   getSuggest: (params) => {
      const url = '/users/suggested'
      return axiosClient.get(url, { params })
   },
   get: (id) => {
      const url = `/users/@${id}`
      return axiosClient.get(url)
   },
}
export default userApi
