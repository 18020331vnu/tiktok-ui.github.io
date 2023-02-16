import HeadlessTippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'
import { memo } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import followApi from '../../api/followApi'
import Popover from '../Popover/Popover'
import { follow, unfollow } from '../../redux/followingSlice'
import Button from '../../components/Button/Button'
import { VerifyBagdeIcon } from '../../components/Icons/HeaderIcons/HeaderIcons'
// import Popover from '../Popover/Popover'

function AccountPreview({ children, data, placement, offset, bio }) {
   const followingList = useSelector((state) => state.following)
   const [followersCount, setFollowersCount] = useState(data.followers_count)

   const dispatch = useDispatch()

   const handleFollowUser = async (user) => {
      await followApi.followUser(user.id)
      dispatch(
         follow({
            id: user.id,
            followers: user.followers_count,
            likes: user.likes_count,
         })
      )
      setFollowersCount(followersCount + 1)
   }

   const handleUnfollowUser = async (user) => {
      await followApi.unfollowUser(user.id)
      setFollowersCount(followersCount - 1)
      dispatch(
         unfollow({
            id: user.id,
            followers: user.followers_count,
            likes: user.likes_count,
         })
      )
   }

   const renderPopover = (attr) => {
      return (
         <Popover className={'w-80 p-5 overflow-y-hidden'}>
            <div className="mb-3 flex items-center justify-between">
               <Link to={`/@${data.nickname}`}>
                  <img
                     src={
                        data.avatar ===
                        'https://files.fullstack.edu.vn/f8-tiktok/'
                           ? 'src/assets/img/avatar_tmp.jpeg'
                           : data.avatar
                     }
                     alt=""
                     className={`mr-3 h-11 w-11 rounded-full border-none bg-slate-300`}
                  />
               </Link>
               {!followingList.some((item) => item.id === data.id) && (
                  <Button
                     onClick={() => handleFollowUser(data)}
                     className="h-[34px] w-[106px] justify-center rounded bg-primaryColor text-base font-semibold text-white hover:bg-[#e83256]"
                  >
                     Follow
                  </Button>
               )}
               {followingList.some((item) => item.id === data.id) && (
                  <Button
                     onClick={() => handleUnfollowUser(data)}
                     className="h-[36px] w-[108px] justify-center rounded border border-[#1618231f] text-base font-semibold text-textBoldColor hover:border-[#d0d1d3] hover:bg-[#f8f8f8]"
                  >
                     Đang Follow
                  </Button>
               )}
            </div>
            <Link
               className="flex items-center text-lg font-bold leading-[22px] text-textBoldColor"
               to={`/@${data.nickname}`}
            >
               {data.nickname}
               {data.tick && <VerifyBagdeIcon className={'ml-1'} />}
            </Link>
            <Link
               className={`block text-sm font-semibold`}
               to={`/@${data.nickname}`}
            >
               {`${data.first_name} ${data.last_name}` === ' '
                  ? data.nickname
                  : `${data.first_name} ${data.last_name}`}
            </Link>
            <div className="mt-2 flex leading-[22px]">
               <p className="mr-3 text-[#161823bf]">
                  <span className="text-[17px] font-bold text-textBoldColor">
                     {`${followersCount} `}
                  </span>
                  Follower
               </p>
               <p className="text-[#161823bf]">
                  <span className="text-[17px] font-bold text-textBoldColor">
                     {`${data.likes_count} `}
                  </span>
                  Thích
               </p>
            </div>

            {bio && (
               <div className="mt-4 border-t border-[#1618231f] pt-4 text-sm">
                  {bio}
               </div>
            )}
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
            <div className="cursor-pointer">{children}</div>
         </HeadlessTippy>
      </div>
   )
}

AccountPreview.propTypes = {
   children: PropTypes.node.isRequired,
   data: PropTypes.object.isRequired,
}

export default memo(AccountPreview)
