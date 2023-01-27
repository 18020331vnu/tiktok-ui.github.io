import PropTypes from 'prop-types'
import React, { memo } from 'react'
import AccountItem from './AccountItem'

function AccountsList({
   title,
   data,
   headerStyle,
   onClick,
   className,
   childStyle,
}) {
   return (
      <div className={className}>
         {console.log('re-render AccountsList')}
         <div
            className={`rounded-lg text-left text-sm font-semibold text-[#16182380] ${headerStyle}`}
         >
            {title}
         </div>
         {data.map((item) => (
            <AccountItem
               key={item.id}
               onClick={() => onClick(item.nickname)}
               username={item.nickname}
               avatar={item.avatar}
               firstName={item.first_name}
               lastName={item.last_name}
               tick={item.tick}
               className={childStyle}
            />
         ))}
      </div>
   )
}

AccountsList.propTypes = {
   title: PropTypes.string.isRequired,
   className: PropTypes.string,
   data: PropTypes.array.isRequired,
   headerStyle: PropTypes.string,
   onClick: PropTypes.func,
}

export default memo(AccountsList)
