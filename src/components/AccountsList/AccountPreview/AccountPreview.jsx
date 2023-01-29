import HeadlessTippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import { VerifyBagdeIcon } from '../../Icons/HeaderIcons/HeaderIcons'
import Popover from '../../Popover/Popover'

function AccountPreview({ children, data }) {
   function renderPopover(attr) {
      return (
         <Popover className={'h-[170px] w-80 p-5 overflow-y-hidden'}>
            <div className="mb-3 flex items-center justify-between">
               <Link to={`/@${data.nickname}`}>
                  <img
                     src={
                        data.avatar ===
                        'https://files.fullstack.edu.vn/f8-tiktok/'
                           ? null
                           : data.avatar
                     }
                     alt=""
                     className={`mr-3 h-10 w-10 rounded-full border-none bg-slate-300 ${
                        data.avatar ===
                        'https://files.fullstack.edu.vn/f8-tiktok/'
                           ? 'animate-pulse opacity-30'
                           : ''
                     }`}
                  />
               </Link>
               <Button className="h-[34px] w-[106px] justify-center rounded bg-primaryColor text-base font-semibold text-white hover:bg-[#e83256] ">
                  Follow
               </Button>
            </div>
            <Link
               className="flex items-center text-lg font-bold text-textBoldColor"
               to={`/@${data.nickname}`}
            >
               {data.nickname}
               {data.tick && <VerifyBagdeIcon className={'ml-1'} />}
            </Link>
            <Link
               className={`block text-sm font-semibold ${
                  `${data.first_name} ${data.last_name}` === ' '
                     ? 'h-3 w-52 animate-pulse rounded-full bg-slate-300 opacity-30'
                     : ''
               }`}
               to={`/@${data.nickname}`}
            >
               {`${data.first_name} ${data.last_name}`}
            </Link>
            <div className="mt-2 flex">
               <p className="mr-3 text-[#161823bf]">
                  <span className="text-[17px] font-bold text-textBoldColor">
                     {data.followers_count}
                  </span>{' '}
                  Follower
               </p>
               <p className="text-[#161823bf]">
                  <span className="text-[17px] font-bold text-textBoldColor">
                     {data.likes_count}
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
            offset={[-20, 0]}
            placement={'bottom'}
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
