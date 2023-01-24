import React from 'react'
import PropTypes from 'prop-types'
import { VerifyBagdeIcon } from '../Icons/HeaderIcons/HeaderIcon'

function AccountItem({ username, avatar, fullName, tick, onClick }) {
   return (
      <div
         onClick={onClick}
         className="flex w-[361px] cursor-pointer items-center px-4 py-2 hover:bg-[#16182308]"
      >
         <img
            src={
               avatar !== 'https://files.fullstack.edu.vn/f8-tiktok/'
                  ? avatar
                  : `https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1674550800&x-signature=KLRr8%2Bn3J5Rib5fERj5JLgCVeGQ%3D`
            }
            alt=""
            className="mr-3 h-10 w-10 rounded-full"
         />
         <div className="flex flex-col items-start">
            <h4 className="flex text-base font-semibold">
               {username || 'Thu Sang'}
               {tick && <VerifyBagdeIcon className={'ml-2 mb-[2px]'} />}
            </h4>
            <p className="text-sm font-normal text-[#16182380]">
               {`${fullName}`}
            </p>
         </div>
      </div>
   )
}

AccountItem.propTypes = {
   username: PropTypes.string,
   avatar: PropTypes.string,
   fullName: PropTypes.string,
   tick: PropTypes.bool,
   onClick: PropTypes.func,
}
export default AccountItem
