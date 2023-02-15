import PropTypes from 'prop-types'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

function DefaultLayout({ children }) {
   return (
      <div className="flex flex-col items-center justify-center">
         <Header />
         <div className="mt-[var(--header-height)] flex justify-end lg:w-full  xl:w-[1150px]">
            <Sidebar />
            <div className="mx-4 lg:w-[692px]">{children}</div>
         </div>
      </div>
   )
}
DefaultLayout.propTypes = {
   children: PropTypes.node.isRequired,
}
export default DefaultLayout
