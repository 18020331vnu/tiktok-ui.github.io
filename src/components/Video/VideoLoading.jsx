import React from 'react'
import PropTypes from 'prop-types'

function VideoLoading(props) {
   return (
      <div className="relative mx-4 flex w-[692px] border-b border-b-[#16182333] py-5">
         <div className="h-14 w-14 animate-pulse rounded-full bg-slate-200"></div>

         <div className="ml-3 flex-grow">
            <div className="mb-3 flex h-[28px] items-end">
               {/* Chèn AccountPreview bọc lại */}
               <div className="mr-1 inline-block h-4 w-16 animate-pulse rounded-full bg-slate-200"></div>
               <div className="inline-block h-3 w-24 animate-pulse rounded-full bg-slate-100"></div>
            </div>

            <div className="h-4 w-[300px] animate-pulse rounded-full bg-slate-200"></div>

            <div className="mt-2 mb-3 h-4 w-[420px] animate-pulse rounded-full bg-slate-200"></div>

            <div className="flex items-end">
               <div className="relative mr-5">
                  {/* Video */}
                  <div className="h-[503px] w-[283px] animate-pulse rounded-lg bg-slate-200"></div>
                  {/* <PlayIcon className={'absolute top-0 left-0'} />
                  <SoundIcon className={'absolute top-0 right-0'} /> */}
               </div>

               <div className={'flex flex-col'}>
                  <span className="mt-7 h-[52px] w-[52px] animate-pulse rounded-full bg-slate-100"></span>
                  <span className="mt-7 h-[52px] w-[52px] animate-pulse rounded-full bg-slate-100"></span>
                  <span className="mt-7 h-[52px] w-[52px] animate-pulse rounded-full bg-slate-100"></span>
               </div>
            </div>
         </div>
      </div>
   )
}

VideoLoading.propTypes = {}

export default VideoLoading
