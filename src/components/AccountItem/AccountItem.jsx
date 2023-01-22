import { VerifyBagdeIcon } from '../Icons/HeaderIcons/HeaderIcon'

function AccountItem({ username, avatar, fullName, tick, onClick }) {
   return (
      <div
         onClick={onClick}
         className="flex items-center px-4 py-2 w-[361px] hover:bg-[#16182308] cursor-pointer"
      >
         <img
            src={
               avatar !== 'https://files.fullstack.edu.vn/f8-tiktok/'
                  ? avatar
                  : `https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1674550800&x-signature=KLRr8%2Bn3J5Rib5fERj5JLgCVeGQ%3D`
            }
            alt=""
            className="w-10 h-10 rounded-full mr-3"
         />
         <div className="flex flex-col items-start">
            <h4 className="text-base flex font-semibold">
               {username || 'Thu Sang'}
               {tick && <VerifyBagdeIcon className={'ml-2 mb-[2px]'} />}
            </h4>
            <p className="text-sm text-[#16182380] font-normal">
               {`${fullName}`}
            </p>
         </div>
      </div>
   )
}

export default AccountItem
