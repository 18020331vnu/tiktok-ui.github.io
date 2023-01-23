import axios from 'axios'
console.log(import.meta.env.VITE_API_URL)
const axiosClient = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   timeout: 3000,
   headers: {
      'Content-Type': 'application/json',
   },
   //    paramsSerializer: (params) => queryString.stringify(params),
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
