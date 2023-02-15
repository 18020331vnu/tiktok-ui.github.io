import axiosClient from './axiosClient'

const commentApi = {
   getComments: (postId, params) => {
      const url = `/videos/${postId}/comments`
      return axiosClient.get(url, { params })
   },
   postComment: (postId, body) => {
      const url = `videos/${postId}/comments`
      return axiosClient.post(url, body)
   },
   deleteComment: (commentId) => {
      const url = `videos/comments/${commentId}`
      return axiosClient.delete(url)
   },
   editComment: (commentId, body) => {
      const url = `videos/comments/${commentId}`
      return axiosClient.patch(url, body)
   },
}
export default commentApi
