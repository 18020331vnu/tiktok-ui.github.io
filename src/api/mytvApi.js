import { AxiosHeaders } from 'axios'
import axiosClient from './axiosClient'
function uuidv4() {
   return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
         c ^
         (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
   )
}
const mytvApi = {
   postData: () => {
      const url = `/check?&uuid=${uuidv4().replaceAll(
         '-',
         ''
      )}&time=2023y01m27d_03h14m25s70ms`
      return axiosClient.post(url)
   },
}

export default mytvApi
