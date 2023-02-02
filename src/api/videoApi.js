import axiosClient from './axiosClient'

const videoApi = {
   getVideoList: (params) => {
      const url = '/videos'
      return axiosClient.get(url, { params })
   },
}
export default videoApi
