import PropTypes from 'prop-types'
import React from 'react'
import AccountItem from '../AccountsList/AccountItem'
import AccountPreview from './AccountPreview'

function AccountsListWithPreview({
   title,
   data,
   headerStyle,
   childStyle,
   className,
}) {
   return (
      <div className={className}>
         <p
            className={`rounded-lg text-left text-sm font-semibold text-[#16182380] ${headerStyle}`}
         >
            {title}
         </p>

         {data.map((item) => (
            <AccountPreview
               data={item}
               placement={'bottom'}
               key={item.id}
               offset={[-20, 0]}
            >
               <AccountItem
                  to={`/@${item.nickname}`}
                  username={item.nickname}
                  avatar={item.avatar}
                  firstName={item.first_name}
                  lastName={item.last_name}
                  tick={item.tick}
                  className={childStyle}
               />
            </AccountPreview>
         ))}
      </div>
   )
}

AccountsListWithPreview.propTypes = {
   title: PropTypes.string.isRequired,
   data: PropTypes.array.isRequired,
   headerStyle: PropTypes.string,
   childStyle: PropTypes.string,
   className: PropTypes.string,
}

export default AccountsListWithPreview
