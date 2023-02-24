import HeadlessTippy from '@tippyjs/react/headless'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import searchApi from '../../api/searchApi'
import AccountsList from '../../feature/Account/AccountsList'
import Popover from '../../feature/Popover/Popover'
import useDebounce from '../../hooks/useDebounce'
// import AccountsList from '../AccountsList/AccountsList'
import { CloseIcon, LoadingIcon, SearchIcon } from '../Icons/HeaderIcons'
// import Popover from '../Popover/Popover'

function HeaderSearch() {
   console.log('re-render HeaderSearch')
   const [inputValue, setInputValue] = useState('')
   const [searchResult, setSearchResult] = useState([])
   const [showLoading, setShowLoading] = useState(false)
   const [showPopover, setShowPopover] = useState(true)

   const inputRef = useRef()
   const navigate = useNavigate()

   const debounceInputValue = useDebounce(inputValue, 700)

   useEffect(() => {
      if (inputValue === '') {
         setSearchResult([])
         return
      }
      const getSearchResult = async () => {
         try {
            setShowLoading(true)
            const response = await searchApi.getAll({
               q: debounceInputValue,
               type: 'less',
            })
            setSearchResult(response.data)
            setShowLoading(false)
         } catch (error) {
            setShowLoading(false)
         }
      }
      getSearchResult()
   }, [debounceInputValue])

   const handleInputChange = (e) => {
      const searchValue = e.target.value
      if (searchValue.trim() === '') {
         setInputValue('')
         setSearchResult([])
         return
      }
      setInputValue(
         searchValue.startsWith(' ') ? searchValue.trim() : searchValue
      )
   }

   const handleRouterChange = useCallback(
      (username) => {
         setInputValue('')
         setSearchResult([])
         navigate(`/@${username}`)
      },
      [searchResult]
   )

   return (
      // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
      <div>
         <HeadlessTippy
            visible={showPopover && searchResult.length > 0}
            interactive
            onClickOutside={() => {
               setShowPopover(false)
            }}
            render={(attr) => (
               <Popover className={'w-[361px] py-2'}>
                  <AccountsList
                     title={'Tài khoản'}
                     data={searchResult}
                     onClick={handleRouterChange}
                     headerStyle={'px-3 py-[5px]'}
                  />

                  <p className="text-16 cursor-pointer py-[15px] px-4 text-left font-semibold leading-[22px] hover:bg-hoverMainColor">
                     Xem tất cả kết quả cho "{inputValue}"
                  </p>
               </Popover>
            )}
         >
            <div className="relative  hidden w-[361px] flex-shrink-0 items-center overflow-hidden rounded-md bg-[#1618230f] lg:flex">
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
                  className="peer ml-4 w-[252px] flex-shrink-0 bg-transparent text-base font-normal caret-rose-500 outline-none placeholder-shown:w-[292px]"
               />

               {/* Close button */}
               {!showLoading && (
                  <button
                     className="block px-3 peer-placeholder-shown:hidden"
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
               <span className="h-7 w-[1px] bg-slate-300"></span>

               {/* Search icon */}

               <button className="bg-[rgba(22, 24, 35, .34)] h-full fill-[#161823bf] py-[11px] pl-3 pr-4 opacity-70 peer-placeholder-shown:fill-[#16182357] hover:bg-gray-200">
                  <SearchIcon />
               </button>
               <div className="absolute inset-0 -z-[1] rounded-md border-[1.5px] border-transparent peer-focus-within:border-[#16182333]"></div>
            </div>
         </HeadlessTippy>
      </div>
   )
}

export default HeaderSearch
