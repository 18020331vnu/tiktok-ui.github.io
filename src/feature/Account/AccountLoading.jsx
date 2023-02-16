import React from 'react'

function AccountLoading() {
   return (
      <div
         className={`flex w-[full] animate-pulse cursor-pointer items-center rounded px-4 py-2 hover:bg-hoverMainColor`}
      >
         <img
            alt=""
            className="mr-3 h-10 w-10 rounded-full bg-slate-300 opacity-50"
         />
         <div className="flex h-12 flex-col items-start justify-around ">
            <h4 className="h-3 w-20 rounded-full bg-slate-300 opacity-50"></h4>
            <p className="h-3 w-52 rounded-full bg-slate-300  opacity-50"></p>
         </div>
      </div>
   )
}

AccountLoading.propTypes = {}

export default AccountLoading
