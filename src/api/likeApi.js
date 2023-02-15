import axiosClient from './axiosClient'

const likeApi = {
   likePost: (postId) => {
      const url = `videos/${postId}/like`
      return axiosClient.post(url)
   },
   unlikePost: (postId) => {
      const url = `videos/${postId}/unlike`
      return axiosClient.post(url)
   },

   likeComment: (commentId) => {
      const url = `comments/${commentId}/like`
      return axiosClient.post(url)
   },

   unlikeComment: (commentId) => {
      const url = `comments/${commentId}/unlike`
      return axiosClient.post(url)
   },
}

export default likeApi
