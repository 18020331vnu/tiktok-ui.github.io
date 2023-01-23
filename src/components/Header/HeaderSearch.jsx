import TippyHeadless from '@tippyjs/react/headless'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import searchApi from '../../api/searchApi'
import useDebounce from '../../hooks/useDebounce'
import AccountItem from '../AccountItem/AccountItem'
import {
   CloseIcon,
   LoadingIcon,
   SearchIcon,
} from '../Icons/HeaderIcons/HeaderIcon'
import Popover from '../Popover/Popover'

function HeaderSearch() {
   const [inputValue, setInputValue] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const [showLoading, setShowLoading] = useState(false)
   const [showPopover, setShowPopover] = useState(true)

   const inputRef = useRef()
   const navigate = useNavigate()

   const debounceInputValue = useDebounce(inputValue, 700)

   useEffect(() => {
      const getSearchResult = async () => {
         setShowLoading(true)
         const response = await searchApi.getAll({
            q: debounceInputValue,
            type: 'less',
         })
         setSearchResult(response.data)
         setShowLoading(false)
      }
      if (inputValue.trim() !== '') {
         getSearchResult()
      }
   }, [debounceInputValue])

   const handleInputChange = (e) => {
      if (e.target.value.trim() === '') {
         setShowPopover(false)
         setInputValue(e.target.value.trim())
      } else {
         setShowPopover(true)
         setSearchResult([])
         setInputValue(e.target.value)
      }
   }

   const handleRouterChange = (username) => {
      navigate(`/@${username}`)
   }
   return (
      <TippyHeadless
         visible={showPopover && searchResult.length > 0}
         interactive
         onClickOutside={() => {
            setShowPopover(false)
         }}
         render={(attr) => (
            <Popover>
               <div className="text-[#16182380] text-sm py-[5px] px-3 text-left pt-2 rounded-lg font-semibold">
                  Tài khoản
               </div>
               {searchResult.map((item) => (
                  <AccountItem
                     onClick={() => handleRouterChange(item.nickname)}
                     key={item.id}
                     username={item.nickname}
                     avatar={item.avatar}
                     fullName={item.full_name}
                     tick={item.tick}
                  />
               ))}

               <p className="text-left text-16 leading-[22px] py-[15px] px-4 hover:bg-[#16182308] cursor-pointer font-semibold">
                  Xem tất cả kết quả cho "{inputValue}"
               </p>
            </Popover>
         )}
      >
         <div className="relative flex items-center bg-[#1618230f] w-[361px] rounded-md flex-shrink-0 overflow-hidden">
            {/* Input search */}
            <input
               ref={inputRef}
               value={inputValue}
               type="text"
               onChange={handleInputChange}
               onFocus={() => {
                  setShowPopover(true)
               }}
               placeholder="Tìm kiếm tài khoản và video"
               className="font-normal bg-transparent w-[252px] flex-shrink-0 ml-4 outline-none text-base caret-rose-500 peer placeholder-shown:w-[292px]"
            />

            {/* Close button */}
            {!showLoading && (
               <button
                  className="px-3 block peer-placeholder-shown:hidden"
                  onClick={() => {
                     setSearchResult([])
                     setInputValue('')
                     inputRef.current.focus()
                  }}
               >
                  <CloseIcon />
               </button>
            )}

            {/* Loading animation icon */}
            {showLoading && (
               <div className="animate-spin  px-3 ">
                  <LoadingIcon />
               </div>
            )}

            {/* Split bar */}
            <span className="w-[1px] h-7 bg-slate-300"></span>

            {/* Search icon */}

            <button className="py-[11px] pl-3 pr-4 opacity-70 bg-[rgba(22, 24, 35, .34)] fill-[#161823bf] hover:bg-gray-200 h-full peer-placeholder-shown:fill-[#16182357]">
               <SearchIcon className={''} />
            </button>
            <div className="absolute inset-0 border-[1.5px] rounded-md border-transparent -z-[1] peer-focus-within:border-[#16182333]"></div>
         </div>
      </TippyHeadless>
   )
}

export default HeaderSearch
