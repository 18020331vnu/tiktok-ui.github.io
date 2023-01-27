import axios from 'axios'
const axiosClient = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
   timeout: 3000,
   headers: {
      'Content-Type': 'application/json',
   },
   //    paramsSerializer: (params) => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
   // config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9yZWdpc3RlciIsImlhdCI6MTY1MTc0MjI1OSwiZXhwIjoxNjU0MzM0MjU5LCJuYmYiOjE2NTE3NDIyNTksImp0aSI6ImdremlxN05LcFJrdVJYSVoiLCJzdWIiOjUsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.IF9kZeYa8zqAaTmUJFh640ylAb8Lmku2sb2OkPcQ0M0`
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
