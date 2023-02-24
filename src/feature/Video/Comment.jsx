import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { LikeIcon, LikeIconFill } from '../../components/Icons/VideoModalIcon'
import Button from '../../components/Button/Button'
import likeApi from '../../api/likeApi'
import AccountPreview from '../Account/AccountPreview'
import { Link } from 'react-router-dom'

function Comment({ user, data, onClick }) {
   const {
      comment: content,
      id: commentId,
      likes_count,
      is_liked,
      updated_at: lastUpdated,
   } = data
   const { avatar, first_name, last_name, tick, nickname } = user

   const [liked, setliked] = useState(is_liked)
   const [likeCount, setLikeCount] = useState(likes_count)
   const formatDate = (lastUpdated) => {
      const currentDate = new Date()
      const toMiliSeconds = currentDate - lastUpdated
      const toSeconds = toMiliSeconds / 1000
      const toMinutes = toSeconds / 60
      const toHours = toMinutes / 60
      const toDays = toHours / 24

      if (currentDate.getFullYear() !== lastUpdated.getFullYear()) {
         return `${lastUpdated.getFullYear()}-${
            lastUpdated.getMonth() + 1
         }-${lastUpdated.getDate()}`
      } else if (toDays > 3) {
         return `${lastUpdated.getMonth() + 1}-${lastUpdated.getDate()}`
      } else if (toDays > 1 && toDays < 3) {
         return `${Math.floor(toDays)} ngày trước`
      } else if (toHours > 1) {
         return `${Math.floor(toHours)} giờ trước`
      } else if (toMinutes > 1) {
         return `${Math.floor(toMinutes)} phút trước`
      } else if (toSeconds > 1) {
         return `${Math.floor(toSeconds)} giây trước`
      } else {
         return 'Vừa xong'
      }
   }

   const handleLikeComment = async (commentId) => {
      await likeApi.likeComment(commentId)
      setLikeCount(likeCount + 1)
      setliked(true)
   }

   const handleUnlikeComment = async (commentId) => {
      await likeApi.unlikeComment(commentId)
      setLikeCount(likeCount - 1)
      setliked(false)
   }

   try {
      return (
         <div className="mb-4 flex">
            <AccountPreview data={user}>
               <Link to={`/@${nickname}`}>
                  <img
                     loading="lazy"
                     src={
                        avatar === 'https://files.fullstack.edu.vn/f8-tiktok/'
                           ? '/src/assets/img/avatar_tmp.jpeg'
                           : avatar
                     }
                     alt=""
                     className="mr-3 h-10 w-10 rounded-full"
                  />
               </Link>
            </AccountPreview>

            <div className="flex-grow">
               <AccountPreview data={user}>
                  <Link to={`/@${nickname}`}>
                     <p className="flex items-baseline text-lg font-bold leading-[25px]">
                        {`${first_name} ${last_name}` === ' '
                           ? nickname
                           : `${first_name} ${last_name}`}
                        {tick && <VerifyBagdeIcon className={'ml-1'} />}
                     </p>
                  </Link>
               </AccountPreview>

               <p className="mb-[6px] leading-[22px]">{content}</p>
               <p className="text-sm text-[#16182380]">
                  {formatDate(new Date(lastUpdated))}
                  <span onClick={onClick} className="ml-6">
                     Trả lời
                  </span>
               </p>
            </div>

            <div className="ml-[18px] flex w-6 flex-shrink-0 flex-col items-center pt-6">
               {!liked && (
                  <Button onClick={() => handleLikeComment(commentId)}>
                     <LikeIcon />
                  </Button>
               )}
               {liked && (
                  <Button onClick={() => handleUnlikeComment(commentId)}>
                     <LikeIconFill />
                  </Button>
               )}
               <p className="text-xs leading-[17px]">{likeCount}</p>
            </div>
         </div>
      )
   } catch (error) {
      console.log(error)
   }
}

Comment.propTypes = {}

export default memo(Comment)
