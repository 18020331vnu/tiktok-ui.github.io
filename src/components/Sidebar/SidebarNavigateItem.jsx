import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function SidebarNavigateItem({ to, title, icon, activeIcon }) {
   return (
      <NavLink
         className={({ isActive }) =>
            `${
               isActive ? 'text-primaryColor' : 'text-textBoldColor'
            } flex h-12 w-[340px] items-center rounded p-2  hover:bg-hoverMainColor`
         }
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

SidebarNavigateItem.propTypes = {
   to: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   icon: PropTypes.element.isRequired,
   activeIcon: PropTypes.element.isRequired,
}

export default SidebarNavigateItem
