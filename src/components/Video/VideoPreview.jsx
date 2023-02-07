import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { PlayIconRegular } from '../Icons/VideoIcons/VideoIcons'

function VideoPreview({ data }) {
   const videoRef = useRef(null)

   const handlePlayVideo = () => {
      videoRef.current.play()
   }
   const handlePauseVideo = (e) => {
      videoRef.current.pause()
   }

   return (
      <Link
         to={`/@${data.user.nickname}/video/${data.uuid}`}
         className="min-w-[184px] max-w-[208px]"
      >
         <div className="relative  overflow-hidden rounded bg-slate-300 pt-[132.653%]">
            <div className="absolute inset-0">
               <video
                  muted
                  ref={videoRef}
                  onMouseEnter={handlePlayVideo}
                  onMouseLeave={handlePauseVideo}
                  src={data.file_url}
                  className="h-full w-full object-cover"
               />
               <div className="absolute bottom-[11px] left-[13px] flex items-center drop-shadow-2xl">
                  <PlayIconRegular />
                  <span className="ml-1 font-semibold text-white">
                     {data.likes_count}
                  </span>
               </div>
            </div>
         </div>

         <div className="mt-[6px] w-full">
            <p className="truncate text-sm leading-5 text-textBoldColor">
               {data.description}
            </p>
         </div>
      </Link>
   )
}

VideoPreview.propTypes = {}

export default VideoPreview
