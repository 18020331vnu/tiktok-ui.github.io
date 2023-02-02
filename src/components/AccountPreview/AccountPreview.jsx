import HeadlessTippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import followApi from '../../api/followApi'
import Button from '../Button/Button'
import { VerifyBagdeIcon } from '../Icons/HeaderIcons/HeaderIcons'
import Popover from '../Popover/Popover'

function AccountPreview({ children, data, placement, offset }) {
   console.log('rerender account preview')
   const [user, setUser] = useState(data)

   const handleFollowUser = async () => {
      try {
         const response = await followApi.followUser(user.id)
         setUser(response.data)
      } catch (error) {
         console.log(error)
      }
   }

   const handleUnfollowUser = async () => {
      try {
         const response = await followApi.unfollowUser(user.id)
         setUser(response.data)
      } catch (error) {
         console.log(error)
      }
   }

   const renderPopover = (attr) => {
      return (
         <Popover className={'h-[170px] w-80 p-5 overflow-y-hidden'}>
            <div className="mb-3 flex items-center justify-between">
               <Link to={`/@${user.nickname}`}>
                  <img
                     src={
                        user.avatar ===
                        'https://files.fullstack.edu.vn/f8-tiktok/'
                           ? null
                           : user.avatar
                     }
                     alt=""
                     className={`mr-3 h-10 w-10 rounded-full border-none bg-slate-300 ${
                        user.avatar ===
                        'https://files.fullstack.edu.vn/f8-tiktok/'
                           ? 'animate-pulse opacity-30'
                           : ''
                     }`}
                  />
               </Link>
               {!user.is_followed && (
                  <Button
                     onClick={handleFollowUser}
                     className="h-[34px] w-[106px] justify-center rounded bg-primaryColor text-base font-semibold text-white hover:bg-[#e83256]"
                  >
                     Follow
                  </Button>
               )}
               {user.is_followed && (
                  <Button
                     onClick={handleUnfollowUser}
                     className="h-[36px] w-[108px] justify-center rounded border border-[#1618231f] text-base font-semibold text-textBoldColor hover:border-[#d0d1d3] hover:bg-[#f8f8f8]"
                  >
                     Đang Follow
                  </Button>
               )}
            </div>
            <Link
               className="flex items-center text-lg font-bold text-textBoldColor"
               to={`/@${user.nickname}`}
            >
               {user.nickname}
               {user.tick && <VerifyBagdeIcon className={'ml-1'} />}
            </Link>
            <Link
               className={`block text-sm font-semibold ${
                  `${user.first_name} ${user.last_name}` === ' '
                     ? 'h-3 w-52 animate-pulse rounded-full bg-slate-300 opacity-30'
                     : ''
               }`}
               to={`/@${user.nickname}`}
            >
               {`${user.first_name} ${user.last_name}`}
            </Link>
            <div className="mt-2 flex">
               <p className="mr-3 text-[#161823bf]">
                  <span className="text-[17px] font-bold text-textBoldColor">
                     {user.followers_count}
                  </span>{' '}
                  Follower
               </p>
               <p className="text-[#161823bf]">
                  <span className="text-[17px] font-bold text-textBoldColor">
                     {user.likes_count}
                  </span>{' '}
                  Thích
               </p>
            </div>
         </Popover>
      )
   }

   return (
      // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
      <div>
         <HeadlessTippy
            // visible
            interactive
            delay={[700, 200]}
            offset={offset}
            placement={placement}
            render={renderPopover}
         >
            <div>{children}</div>
         </HeadlessTippy>
      </div>
   )
}

AccountPreview.propTypes = {
   children: PropTypes.node.isRequired,
   data: PropTypes.object.isRequired,
}

export default AccountPreview
