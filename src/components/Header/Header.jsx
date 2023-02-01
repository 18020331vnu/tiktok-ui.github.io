import Tippy from '@tippyjs/react'
import { memo } from 'react'
import 'tippy.js/dist/tippy.css'
import { LOGIN_MENU_ITEMS, MENU_ITEMS } from '../../constant/menuItem'
import Button from '../Button/Button'
import {
   InboxIcon,
   Logo,
   MessageIcon,
   MoreIcon,
   UploadIcon,
} from '../Icons/HeaderIcons/HeaderIcons'

import PopoverMenu from '../Popover/PopoverMenu'
import HeaderSearch from './HeaderSearch'

function Header() {
   console.log('re-render Header')
   let isLogin = !!localStorage.getItem('token')

   return (
      <div className="fixed top-0 z-50 flex h-[var(--header-height)] w-full justify-center shadow-sm backdrop-blur-md">
         <div className="flex h-full w-[1150px] items-center justify-between pl-5 pr-6">
            <Button to={'/'} className="">
               <Logo className={'h-[42px] w-[118px]'} />
            </Button>

            <HeaderSearch />

            {isLogin && (
               <div className="flex items-center">
                  {/* Upload button */}
                  <Button
                     to="/upload"
                     className="justify-center rounded border border-gray-300 py-[5px] px-4 font-semibold hover:bg-gray-100"
                  >
                     <UploadIcon className={'mr-2 h-5 w-5'} />
                     <span>Tải lên</span>
                  </Button>

                  {/* Message button */}
                  <Tippy content="Tin nhắn">
                     <button className="ml-5">
                        <MessageIcon
                           className={'pt-6px pr-6px h-[26px] w-[26px]'}
                        />
                     </button>
                  </Tippy>

                  {/* Inbox button */}
                  <Tippy content="Hộp thư">
                     <button className="ml-5">
                        <InboxIcon className={'h-8 w-8'} />
                     </button>
                  </Tippy>

                  <PopoverMenu
                     delay={[0, 700]}
                     data={LOGIN_MENU_ITEMS}
                     placement={'bottom-end'}
                  >
                     <div className="ml-6 cursor-pointer">
                        <img
                           src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1675094400&x-signature=1X8lkhlnx5llsxYkl9H3Da9AowA%3D"
                           alt="avatar"
                           className=" h-8 w-8  rounded-full"
                        />
                     </div>
                  </PopoverMenu>
               </div>
            )}
            {!isLogin && (
               <div className="item-center flex">
                  <Button
                     to="/upload"
                     className="justify-center rounded border border-gray-300 py-[5px] px-4 font-semibold hover:bg-gray-100"
                  >
                     <UploadIcon className={'mr-2 h-5 w-5'} />
                     <span>Tải lên</span>
                  </Button>
                  <Button
                     to={'/login'}
                     className="ml-4 w-[120px] justify-center rounded border-none bg-primaryColor py-[6px] font-semibold text-white hover:bg-[#e83256]"
                  >
                     Đăng nhập
                  </Button>

                  <PopoverMenu
                     placement={'bottom-end'}
                     delay={[0, 700]}
                     data={MENU_ITEMS}
                  >
                     <i className="flex cursor-pointer items-center pl-4">
                        <MoreIcon className={'h-5 w-5'} />
                     </i>
                  </PopoverMenu>
               </div>
            )}
         </div>
      </div>
   )
}

export default memo(Header)
