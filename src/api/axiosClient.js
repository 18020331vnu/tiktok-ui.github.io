import axios from 'axios'
const axiosClient = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
   },
   //    paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
   const currentUser = JSON.parse(localStorage.getItem('currentUser'))
   if (currentUser) {
      config.headers.Authorization = `Bearer ${currentUser?.meta?.token}`
   }
   return config
})

axiosClient.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data
      }
      return response
   },
   (error) => {
      throw error
   }
)
export default axiosClient
