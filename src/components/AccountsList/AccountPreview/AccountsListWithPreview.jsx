import React from 'react'
import PropTypes from 'prop-types'
import AccountItem from '../AccountItem'
import AccountPreview from './AccountPreview'
import { createRef } from 'react'
// import AccountPreview from './AccountPreview'
// import AccountItem from './AccountItem'

function AccountsListWithPreview({ title, data, headerStyle, childStyle }) {
   try {
      return (
         <div>
            <p
               className={`rounded-lg text-left text-sm font-semibold text-[#16182380] ${headerStyle}`}
            >
               {title}
            </p>

            {data.map((item) => (
               <AccountPreview data={item} key={item.id}>
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
   } catch (error) {
      console.log(error)
   }
}

AccountsListWithPreview.propTypes = {}

export default AccountsListWithPreview
