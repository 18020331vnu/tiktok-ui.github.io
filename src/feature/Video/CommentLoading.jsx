import React from 'react'

export default function CommentLoading() {
   return (
      <div className="mb-6 flex animate-pulse items-end">
         <div className="mr-3 h-10 w-10 rounded-full bg-slate-200" />
         <div className="flex h-9 flex-grow flex-col justify-between">
            <p className="h-4 w-36 rounded-full bg-slate-200"></p>
            <p className="h-4 w-80 rounded-full bg-slate-200"></p>
         </div>
      </div>
   )
}
