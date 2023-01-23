import axiosClient from './axiosClient'

const searchApi = {
   getAll: (params) => {
      const url = '/users/search'
      return axiosClient.get(url, { params })
   },
}

export default searchApi
