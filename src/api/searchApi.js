import axiosClient from './axiosClient'

const searchApi = {
   getAll: (params) => {
      const url = '/users/search'
      console.log(url)
      return axiosClient.get(url, { params })
   },
}

export default searchApi
