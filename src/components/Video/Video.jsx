import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import {
   CommentIcon,
   HeartIcon,
   MusicIcon,
   PlayIcon,
   ShareIcon,
   SoundIcon,
} from '../Icons/VideoIcons/VideoIcons'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import AccountPreview from '../AccountPreview/AccountPreview'
import followApi from '../../api/followApi'

function Video({ data }) {
   const [videoData, setVideoData] = useState(data)
   const [userData, setUserData] = useState(data.user)

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

   const { nickname, first_name, last_name, avatar } = userData

   const handleFollowUser = async () => {
      const response = await followApi.followUser(user_id)
      setUserData(response.data)
   }

   const handleUnfollowUser = async () => {
      const response = await followApi.unfollowUser(user_id)
      setUserData(response.data)
   }

   try {
      return (
         <div className="relative mx-4 flex w-[692px] border-b border-b-[#16182333] py-5">
            <AccountPreview
               data={userData}
               placement={'bottom-start'}
               offset={[-8, 4]}
            >
               <Link to={`/@${nickname}`}>
                  <img
                     loading="lazy"
                     src={avatar}
                     alt=""
                     className="h-14 w-14 rounded-full bg-slate-400"
                  />
               </Link>{' '}
            </AccountPreview>

            <div className="ml-3 flex-grow">
               <div className="inline-flex h-[28px]">
                  <AccountPreview
                     data={userData}
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
                  className={`text-base font-normal leading-[22px] ${
                     music ? '' : 'mb-3'
                  }`}
               >
                  {/* {title} */}
                  {description}
               </p>

               {music && (
                  <div className="mt-1 mb-3 flex cursor-pointer text-base font-semibold leading-[22px] hover:underline">
                     <MusicIcon className={'mr-[5px] mt-1'} />
                     {`nhạc nền - ${music}`}
                  </div>
               )}

               <div className="flex items-end">
                  <div className="relative mr-5">
                     {/* Video */}
                     <video
                        controls
                        preload="metadata"
                        className=" block max-h-[503px] max-w-[503px] rounded-lg"
                        src={file_url}
                     />
                     <PlayIcon className={'absolute top-0 left-0'} />
                     <SoundIcon className={'absolute top-0 right-0'} />
                  </div>
                  <div>
                     {/* Actions  */}
                     <Button className={'flex flex-col'}>
                        <span className="my-[6px] rounded-full bg-slate-100 p-[14px]">
                           {/* Like */}
                           <HeartIcon />
                        </span>
                        <p className="text-xs font-semibold">{likes_count}</p>
                     </Button>

                     <Button
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
                        <p className="text-xs font-semibold">
                           {comments_count}
                        </p>
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

            {!userData.is_followed && (
               <Button
                  onClick={handleFollowUser}
                  className={
                     'border-primaryColor absolute right-0 top-7 h-7 w-[88px] justify-center rounded border text-base font-semibold text-primaryColor hover:bg-primaryColor hover:text-white'
                  }
               >
                  Follow
               </Button>
            )}

            {userData.is_followed && (
               <Button
                  onClick={handleUnfollowUser}
                  className={
                     'border-primaryColor absolute right-0 top-7 h-7 w-[88px] justify-center rounded border text-base font-semibold text-primaryColor hover:bg-primaryColor hover:text-white'
                  }
               >
                  Dang Follow
               </Button>
            )}
         </div>
      )
   } catch (error) {
      console.log(error)
   }
}

Video.propTypes = {}

export default Video
