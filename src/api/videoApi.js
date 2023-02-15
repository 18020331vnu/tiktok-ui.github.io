import axiosClient from './axiosClient'

const videoApi = {
   getVideoList: (params) => {
      const url = '/videos'
      return axiosClient.get(url, { params })
   },

   getVideo: (uuid) => {
      const url = `/videos/${uuid}`
      return axiosClient.get(url)
   },
}
export default videoApi
