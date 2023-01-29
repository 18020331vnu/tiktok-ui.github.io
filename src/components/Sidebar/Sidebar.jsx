import React, { memo, useEffect, useState } from 'react'
import mytvApi from '../../api/mytvApi'
import userApi from '../../api/userApi'
import AccountLoading from '../AccountsList/AccountLoading'
import AccountsListWithPreview from '../AccountsList/AccountPreview/AccountsListWithPreview'
import Button from '../Button/Button'
import SeparateBar from './SeparateBar'
import SidebarNavigate from './SidebarNavigate'

function Sidebar() {
   console.log('re-render Sidebar')
   const [suggestAccountsList, setSuggestAccountsList] = useState([])
   const [followingAccountsList, setFollowingAccountList] = useState([])

   const [perPage, setPerPage] = useState(5)

   useEffect(() => {
      const getSuggestAccounts = async () => {
         const userList = await userApi.getSuggest({
            page: 1,
            per_page: perPage,
         })
         setSuggestAccountsList(userList.data)
      }
      getSuggestAccounts()
   }, [perPage])

   return (
      <div className="scrollbar-h-[40px] scrollbar-thump-hover-red-400 max-h-[calc(100vh-60px)] w-[356px] overscroll-y-contain pt-5 pl-2 scrollbar-thin hover:scrollbar-thumb-slate-300">
         <SidebarNavigate />
         {/* <AccountPreview /> */}

         <SeparateBar />
         <div className="py-4">
            <AccountsListWithPreview
               title="Tài khoản được đề xuất"
               data={suggestAccountsList}
               headerStyle={'px-2 mb-2 font-semibold text-[#161823bf]'}
               childStyle={'rounded'}
            />

            {suggestAccountsList.length === 0 && <AccountLoading />}
            {suggestAccountsList.length !== 0 && perPage <= 5 && (
               <Button
                  onClick={() => setPerPage(20)}
                  className={
                     'mt-2 w-full px-2 text-sm font-semibold text-primaryColor'
                  }
               >
                  Xem tất cả
               </Button>
            )}
            {suggestAccountsList.length > 5 && (
               <Button
                  onClick={() => setPerPage(5)}
                  className={
                     'mt-2 w-full px-2 text-sm font-semibold text-primaryColor'
                  }
               >
                  Ẩn bớt
               </Button>
            )}
         </div>

         <SeparateBar />
         <div className="py-4">
            <AccountsListWithPreview
               title="Các tài khoản đang follow"
               data={suggestAccountsList}
               headerStyle={'px-2 mb-2 font-semibold text-[#161823bf]'}
               childStyle={'rounded'}
            ></AccountsListWithPreview>
            {suggestAccountsList.length === 0 && <AccountLoading />}

            <Button
               className={'mt-2 px-2 text-sm font-semibold text-primaryColor'}
            >
               Xem tất cả
            </Button>

            <Button
               className={'mt-2 px-2 text-sm font-semibold text-primaryColor'}
            >
               Ẩn bớt
            </Button>
         </div>
      </div>
   )
}

export default memo(Sidebar)
