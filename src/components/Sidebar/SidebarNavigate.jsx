import React from 'react'
import PropTypes from 'prop-types'
import SidebarNavigateItem from './SidebarNavigateItem'
import {
   FollowingIcon,
   FollowingIconActive,
   HomeIcon,
   HomeIconActive,
   LiveIcon,
   LiveIconActive,
} from '../Icons/SidebarIcons/SidebarIcons'

function SidebarNavigate() {
   return (
      <div className="mb-2">
         <SidebarNavigateItem
            title="Dành cho bạn"
            to={'/'}
            icon={<HomeIcon />}
            activeIcon={<HomeIconActive />}
         />

         <SidebarNavigateItem
            title="Đang Follow"
            to={'/following'}
            icon={<FollowingIcon />}
            activeIcon={<FollowingIconActive />}
         />

         <SidebarNavigateItem
            title="LIVE"
            to={'/live'}
            icon={<LiveIcon />}
            activeIcon={<LiveIconActive />}
         />
      </div>
   )
}

SidebarNavigate.propTypes = {}

export default SidebarNavigate
