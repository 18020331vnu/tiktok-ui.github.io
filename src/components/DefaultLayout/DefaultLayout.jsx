import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

function DefaultLayout({ children }) {
   return (
      <div className="flex flex-col justify-center items-center">
         <Header />

         <div className="h-[1000px] w-[1150px] flex justify-center mt-[var(--header-height)]">
            <Sidebar />
            <div className="flex-grow">{children}</div>
         </div>
      </div>
   )
}

export default DefaultLayout
