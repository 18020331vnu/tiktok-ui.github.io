import React from 'react'
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

function Video() {
   return (
      <div className="relative mx-4 flex w-[692px] border-b border-b-[#16182333] py-5">
         <Link>
            <img alt="" className="h-14 w-14 rounded-full bg-slate-400" />
         </Link>

         <div className="ml-3">
            <div className=" h-[28px]">
               <Link to={'/* username */'}>
                  <span className="mr-1 text-lg font-bold text-textBoldColor hover:underline">
                     msquynhthie
                  </span>
                  <span className="text-sm font-normal">msquynhthie</span>
               </Link>
            </div>

            <p className="text-base font-normal leading-[22px]">
               {/* {title} */}
               Rủi ro nghề cưa bom
            </p>
            <div className="mt-1 mb-3 flex cursor-pointer text-base font-semibold leading-[22px] hover:underline">
               <MusicIcon className={'mr-[5px] mt-1'} />
               nhạc nền - Về Bên Anh - TikTok Version 1 - Jack
            </div>
            <div className="flex items-end">
               <div className="relative mr-5">
                  {/* Video */}
                  <video
                     autoPlay={true}
                     muted={true}
                     controls
                     className=" block h-[503px] rounded-lg"
                     src="https://files.fullstack.edu.vn/f8-tiktok/videos/1391-63d524bfde355.mp4"
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
                     <p className="text-xs font-semibold">20.1K</p>
                  </Button>

                  <Button className={'flex flex-col'}>
                     <span className="my-[6px] rounded-full bg-slate-100 p-[14px]">
                        {/* Like */}
                        <CommentIcon />
                     </span>
                     <p className="text-xs font-semibold">20.1K</p>
                  </Button>

                  <Button className={'flex flex-col'}>
                     <span className="my-[6px] rounded-full bg-slate-100 p-[14px]">
                        {/* Like */}
                        <ShareIcon />
                     </span>
                     <p className="text-xs font-semibold">20.1K</p>
                  </Button>
               </div>
            </div>
         </div>
         <Button
            className={
               'absolute right-0 top-7 h-7 w-[88px] justify-center rounded border border-primaryColor text-base font-semibold text-primaryColor hover:bg-primaryColor hover:text-white'
            }
         >
            Follow
         </Button>
      </div>
   )
}

Video.propTypes = {}

export default Video
