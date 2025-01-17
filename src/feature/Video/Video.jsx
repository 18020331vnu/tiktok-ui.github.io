import React, { memo, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
   CommentIcon,
   HeartIcon,
   MusicIcon,
   PlayIconFill,
   ShareIcon,
   SoundIcon,
} from '../../components/Icons/VideoIcons'
import { Link, useNavigate } from 'react-router-dom'
// import Button from '../../Button/Button'
// import AccountPreview from '../../AccountPreview/AccountPreview'
// import followApi from '../../../api/followApi'
import { useDispatch, useSelector } from 'react-redux'
// import { follow, unfollow } from '../../../redux/followingSlice'
import Button from '../../components/Button/Button'
import AccountPreview from '../Account/AccountPreview'
import followApi from '../../api/followApi'
import { follow, unfollow } from '../../redux/followingSlice'

function Video({ data }) {
   const dispatch = useDispatch()
   const followingList = useSelector((state) => state.following)
   const [videoData, setVideoData] = useState(data)
   const [user, setUser] = useState(data.user)

   const {
      comments_count,
      likes_count,
      shares_count,
      music,
      description,
      allows,
      file_url,
      user_id,
   } = videoData

   const { nickname, first_name, last_name, avatar } = user

   const videoRef = useRef(null)

   useEffect(() => {
      let isPaused = true
      let observer = new IntersectionObserver(
         (entries, observer) => {
            if (entries[0].intersectionRatio != 1 && !isPaused) {
               videoRef.current.pause()
               isPaused = true
            } else if (isPaused && entries[0].intersectionRatio != 0) {
               videoRef.current.play()
               isPaused = false
            }
         },
         { threshold: 1, rootMargin: '-15%' }
      )
      if (videoRef.current) {
         observer.observe(videoRef.current)
      }

      return () => {
         if (videoRef.current) {
            observer.unobserve(videoRef.current)
         }
      }
   }, [])

   const handleFollowUser = async (user) => {
      const response = await followApi.followUser(user_id)
      dispatch(
         follow({
            id: user.id,
            followers: user.followers_count,
            likes: user.likes_count,
         })
      )
      setUser(response.data)
   }

   const handleUnfollowUser = async () => {
      const response = await followApi.unfollowUser(user_id)
      dispatch(
         unfollow({
            id: user.id,
            followers: user.followers_count,
            likes: user.likes_count,
         })
      )
      setUser(response.data)
   }

   const navigate = useNavigate()
   const handleOpenVideoRoute = () => {
      ;(async () => {
         await videoRef.current.play()
         videoRef.current.pause()
      })()
   }

   return (
      <div className="relative mx-4 flex w-[692px] border-b border-b-[#16182333] py-5">
         <AccountPreview
            data={user}
            placement={'bottom-start'}
            offset={[-8, 4]}
         >
            <Link to={`/@${nickname}`}>
               <img
                  loading="lazy"
                  src={
                     user.avatar === 'https://files.fullstack.edu.vn/f8-tiktok/'
                        ? '/src/assets/img/avatar_tmp.jpeg'
                        : user.avatar
                  }
                  alt=""
                  className="h-14 w-14 rounded-full bg-slate-400"
               />
            </Link>{' '}
         </AccountPreview>

         <div className="ml-3 flex-grow">
            <div className="inline-flex h-[28px]">
               <AccountPreview
                  data={user}
                  placement={'bottom-start'}
                  offset={[-76, 32]}
               >
                  <Link to={`/@${nickname}`}>
                     {/* Chèn AccountPreview bọc lại */}
                     <span className="mr-1 text-lg font-bold text-textBoldColor hover:underline">
                        {nickname}
                     </span>
                     <span className="text-sm font-normal">{`${first_name} ${last_name}`}</span>
                  </Link>
               </AccountPreview>
            </div>

            <p
               className={`max-w-[510px] text-base font-normal leading-[22px] ${
                  music ? '' : 'mb-3'
               }`}
            >
               {/* {title} */}
               {description}
            </p>

            {music && (
               <div className="mt-1 mb-3 flex max-w-[510px] cursor-pointer text-base font-semibold leading-[22px] hover:underline">
                  <MusicIcon className={'mr-[5px] mt-1'} />
                  {`nhạc nền - ${music}`}
               </div>
            )}

            <div className="flex items-end">
               <div className="relative mr-5">
                  {/* Video */}
                  <Link to={`video/${videoData.uuid}`}>
                     <video
                        loop={true}
                        onClick={handleOpenVideoRoute}
                        ref={videoRef}
                        controls
                        preload="metadata"
                        className=" block max-h-[503px] max-w-[503px] rounded-lg"
                        src={file_url}
                     />
                     <PlayIconFill className={'absolute top-0 left-0'} />
                     <SoundIcon className={'absolute top-0 right-0'} />
                  </Link>
               </div>
               <div>
                  {/* Actions  */}
                  <Button className={'flex flex-col'}>
                     <span className="my-[6px] rounded-full bg-slate-100 p-[14px]">
                        {/* Like */}
                        <HeartIcon className={'h-6 w-6'} />
                     </span>
                     <p className="text-xs font-semibold">{likes_count}</p>
                  </Button>

                  <Button
                     onClick={handleOpenVideoRoute}
                     disable={!allows.includes('comment')}
                     className={'flex flex-col '}
                  >
                     <span className="my-[6px] rounded-full bg-slate-100 p-[14px]">
                        {/* Like */}
                        <CommentIcon
                           className={`${
                              allows.includes('comment') ? '' : 'opacity-20'
                           }`}
                        />
                     </span>
                     <p className="text-xs font-semibold">{comments_count}</p>
                  </Button>

                  <Button className={'flex flex-col'}>
                     <span className="my-[6px] rounded-full bg-slate-100 p-[14px]">
                        {/* Like */}
                        <ShareIcon />
                     </span>
                     <p className="text-xs font-semibold">{shares_count}</p>
                  </Button>
               </div>
            </div>
         </div>

         {!followingList.some((item) => item.id === user_id) && (
            <Button
               onClick={() => handleFollowUser(user)}
               className={
                  'absolute right-0 top-7 h-7 w-[88px] justify-center rounded border border-primaryColor text-base font-semibold text-primaryColor hover:bg-[#fe2c550f]'
               }
            >
               Follow
            </Button>
         )}

         {followingList.some((item) => item.id === user_id) && (
            <Button
               onClick={() => handleUnfollowUser(user)}
               className={
                  'absolute right-0 top-7 h-8 justify-center rounded border border-[#1618231f] px-[10px] text-base font-semibold text-textBoldColor hover:border-[#d0d1d3] hover:bg-[#f8f8f8]'
               }
            >
               Đang Follow
            </Button>
         )}
      </div>
   )
}

Video.propTypes = {}

export default memo(Video)
