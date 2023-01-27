import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function SidebarNavigateItem({
   to,
   title,
   icon,
   activeIcon,
   children,
   ...props
}) {
   return (
      <NavLink
         className={({ isActive }) => {
            return isActive
               ? `flex h-12 w-[340px] items-center rounded p-2 text-primaryColor hover:bg-hoverMainColor`
               : `flex h-12 w-[340px] items-center rounded p-2 text-textBoldColor hover:bg-hoverMainColor`
         }}
         to={to}
      >
         {({ isActive }) => (
            <>
               {isActive ? activeIcon : icon}
               <p className="ml-2 text-lg font-bold">{title}</p>
            </>
         )}
      </NavLink>
   )
}

SidebarNavigateItem.propTypes = {}

export default SidebarNavigateItem
