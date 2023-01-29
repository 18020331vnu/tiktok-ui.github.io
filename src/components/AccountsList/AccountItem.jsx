import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import { VerifyBagdeIcon } from '../Icons/HeaderIcons/HeaderIcons'

function AccountItem({
   username,
   avatar,
   tick,
   onClick,
   to,
   className,
   ...props
}) {
   const { firstName, lastName } = { ...props }
   const Type = to ? Link : 'div'
   return (
      <Type
         to={to}
         onClick={onClick}
         className={`flex w-[full] cursor-pointer items-center px-4 py-2 hover:bg-hoverMainColor ${className}`}
      >
         <img
            src={
               avatar !== 'https://files.fullstack.edu.vn/f8-tiktok/'
                  ? avatar
                  : `https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1675094400&x-signature=1X8lkhlnx5llsxYkl9H3Da9AowA%3D`
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
               {`${firstName} ${lastName}`}
            </p>
         </div>
      </Type>
   )
}

AccountItem.propTypes = {
   username: PropTypes.string.isRequired,
   avatar: PropTypes.string.isRequired,
   tick: PropTypes.bool.isRequired,
   onClick: PropTypes.func,
   to: PropTypes.string,
   className: PropTypes.string,
}
export default AccountItem
