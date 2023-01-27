import React, { memo, useEffect, useState } from 'react'
import { createRef } from 'react'
import mytvApi from '../../api/mytvApi'
import userApi from '../../api/userApi'
import AccountItem from '../AccountsList/AccountItem'
import AccountLoading from '../AccountsList/AccountLoading'
import AccountPreview from '../AccountsList/AccountPreview/AccountPreview'
import AccountsList from '../AccountsList/AccountsList'
import AccountsListWithPreview from '../AccountsList/AccountPreview/AccountsListWithPreview'
// import AccountsListWithPreview from '../AccountsList/AccountsListWithPreview'
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

   // useEffect(() => {
   //    const follo
   // })

   const [count, setCount] = useState(1)

   useEffect(() => {
      const postHehe = async () => {
         try {
            const gift = await mytvApi.postData({
               uuid: '22be2e09536cfd8f5ae1cf7ed12e4f1c',
               time: 'time=2023y01m27d_02h00m29s100ms',
            })
            setCount(count + 1)
         } catch (error) {
            // setCount(count + 1)
         }
      }
      postHehe()
   }, [count])
   try {
      return (
         <div className="h-[calc(100vh-60px)] w-[356px] overscroll-y-contain pt-5 pl-2 overflow-x-hidden scrollbar-thin">
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
               <AccountsList
                  title="Các tài khoản đang follow"
                  data={suggestAccountsList}
                  headerStyle={'px-2 mb-2 font-semibold text-[#161823bf]'}
                  childStyle={'rounded'}
               ></AccountsList>
               {suggestAccountsList.length === 0 && <AccountLoading />}
               <Button
                  className={
                     'mt-2 px-2 text-sm font-semibold text-primaryColor'
                  }
               >
                  Xem tất cả
               </Button>
               <Button
                  className={
                     'mt-2 px-2 text-sm font-semibold text-primaryColor'
                  }
               >
                  Ẩn bớt
               </Button>
            </div>
         </div>
      )
   } catch (error) {
      console.log(error)
   }
}

export default memo(Sidebar)
