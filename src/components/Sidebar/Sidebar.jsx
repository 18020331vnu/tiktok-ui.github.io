import React, { memo, useEffect, useState } from 'react'
import followApi from '../../api/followApi'
import userApi from '../../api/userApi'
import AccountLoading from '../AccountsList/AccountLoading'
import AccountsListWithPreview from '../AccountPreview/AccountsListWithPreview'
import Button from '../Button/Button'
import SeparateBar from './SeparateBar'
import SidebarNavigate from './SidebarNavigate'

function Sidebar() {
   const isLogin = !!localStorage.getItem('token')

   console.log('re-render Sidebar')
   const [suggestAccountsList, setSuggestAccountsList] = useState([])
   const [followingAccountsList, setFollowingAccountList] = useState([])
   const [followingCount, setFollowingCount] = useState(0)

   const [suggestedPerPage, setsuggestedPerPage] = useState(5)
   const [followingPage, setFollowingPage] = useState(1)
   useEffect(() => {
      const getSuggestAccounts = async () => {
         const response = await userApi.getSuggest({
            page: 1,
            per_page: suggestedPerPage,
         })
         setSuggestAccountsList(response.data)
      }
      getSuggestAccounts()
   }, [suggestedPerPage])

   useEffect(() => {
      const getFollowingList = async () => {
         const response = await followApi.getFollowingList({
            page: followingPage,
         })
         setFollowingCount(response.meta.pagination.total)
         setFollowingAccountList((prev) => {
            if (followingPage === 1) return response.data
            return [...prev, ...response.data]
         })
      }

      getFollowingList()
   }, [followingPage])

   return (
      <div className="scrollbar-h-[40px] scrollbar-thump-hover-red-400 fixed top-[60px] left-[calc((100vw-1150px)/2)] max-h-[calc(100vh-60px)] w-[356px] overscroll-y-contain pt-5 pl-2 scrollbar-thin hover:scrollbar-thumb-slate-300">
         <SidebarNavigate />
         {/* <AccountPreview /> */}

         <div>
            <SeparateBar />
            <div className="py-4">
               <AccountsListWithPreview
                  title="Tài khoản được đề xuất"
                  data={suggestAccountsList}
                  headerStyle={'px-2 mb-2 font-semibold text-[#161823bf]'}
                  childStyle={'rounded'}
               />

               {suggestAccountsList.length === 0 && <AccountLoading />}
               {suggestAccountsList.length < 20 && (
                  <Button
                     onClick={() => setsuggestedPerPage(20)}
                     className={
                        'mt-2 w-full px-2 text-sm font-semibold text-primaryColor'
                     }
                  >
                     Xem tất cả
                  </Button>
               )}
               {suggestAccountsList.length > 5 && (
                  <Button
                     onClick={() => setsuggestedPerPage(5)}
                     className={
                        'mt-2 w-full px-2 text-sm font-semibold text-primaryColor'
                     }
                  >
                     Ẩn bớt
                  </Button>
               )}
            </div>
         </div>

         {isLogin && (
            <div>
               <SeparateBar />
               <div className="py-4">
                  <AccountsListWithPreview
                     title="Các tài khoản đang follow"
                     data={followingAccountsList}
                     headerStyle={'px-2 mb-2 font-semibold text-[#161823bf]'}
                     childStyle={'rounded'}
                  ></AccountsListWithPreview>
                  {followingAccountsList.length === 0 && <AccountLoading />}

                  {followingAccountsList.length != followingCount && (
                     <Button
                        className={
                           'mt-2 px-2 text-sm font-semibold text-primaryColor'
                        }
                        onClick={() => setFollowingPage(followingPage + 1)}
                     >
                        Xem thêm
                     </Button>
                  )}

                  {followingAccountsList.length > 5 && (
                     <Button
                        onClick={() => setFollowingPage(1)}
                        className={
                           'mt-2 px-2 text-sm font-semibold text-primaryColor'
                        }
                     >
                        Ẩn bớt
                     </Button>
                  )}
               </div>
            </div>
         )}
      </div>
   )
}

export default memo(Sidebar)
