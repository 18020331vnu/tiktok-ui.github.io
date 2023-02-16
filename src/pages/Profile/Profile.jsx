import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import userApi from '../../api/userApi'
import Button from '../../components/Button/Button'
import { VerifyBagdeIcon } from '../../components/Icons/HeaderIcons/HeaderIcons'
import { NotFoundIcon } from '../../components/Icons/VideoIcons/VideoIcons'
import VideoPreview from '../../feature/Video/VideoPreview'

function Profile() {
   const params = useParams()
   console.log(params)
   const [userDetail, setUserDetail] = useState({})
   const [videoList, setVideoList] = useState([])
   const [isFoundUser, setIsFoundUser] = useState(true)

   useEffect(() => {
      const getProfile = async () => {
         try {
            const response = await userApi.get(params.nickname)
            console.log(response.data)
            setUserDetail(response.data)
            setVideoList(response.data.videos)
            setIsFoundUser(true)
         } catch (error) {
            setIsFoundUser(false)
            console.log(error)
         }
      }
      getProfile()
   }, [params.nickname])
   return (
      <>
         <div className="pt-8 pl-6">
            {isFoundUser && (
               <div>
                  <div className="flex flex-col">
                     <div className="flex">
                        <img
                           className="mr-5 h-[116px] w-[116px] rounded-full"
                           src={userDetail.avatar}
                           alt=""
                        />
                        <div className="flex flex-col">
                           <p className="flex items-baseline text-[32px] font-bold leading-[38px] text-textBoldColor">
                              {userDetail.nickname}
                              {userDetail.tick && (
                                 <VerifyBagdeIcon className={'ml-2 h-5 w-5'} />
                              )}
                           </p>
                           <p className="text-lg font-semibold leading-[25px] text-textBoldColor">
                              {`${userDetail.first_name} ${userDetail.last_name}`}
                           </p>
                           <div>
                              <Button>Tin nhắn</Button>
                           </div>
                           {/* <div>Follow</div> */}
                        </div>
                     </div>
                     <div className="mt-[22px] flex">
                        <p className="mr-5 text-base leading-[22px] text-textBoldColor text-opacity-75">
                           <span className="mr-[6px] text-lg font-bold leading-[25px] text-textBoldColor">
                              {userDetail.followings_count}
                           </span>
                           Đang follow
                        </p>
                        <p className="mr-5 text-base leading-[22px] text-textBoldColor text-opacity-75">
                           <span className="mr-[6px] text-lg font-bold leading-[25px] text-textBoldColor">
                              {userDetail.followers_count}
                           </span>
                           Follower
                        </p>
                        <p className="mr-5 text-base leading-[22px] text-textBoldColor text-opacity-75">
                           <span className="mr-[6px] text-lg font-bold leading-[25px] text-textBoldColor">
                              {userDetail.likes_count}
                           </span>
                           Thích
                        </p>
                     </div>
                     <p className="mt-[10px] text-base leading-[22px] text-textBoldColor">
                        {userDetail.bio}
                     </p>
                     {/* <button>Report</button> */}
                  </div>

                  <div className="mt-5">
                     <div className="flex">
                        <Button
                           className={
                              'h-[44px] w-[230px] justify-center border-b-2 border-[#161823] text-lg font-semibold leading-[25px]'
                           }
                        >
                           Video
                        </Button>
                     </div>
                     <div className="mt-2 grid grid-cols-3 gap-x-6 gap-y-4">
                        {videoList.map((video) => (
                           <VideoPreview key={video.id} data={video} />
                        ))}
                     </div>
                     {videoList.length === 0 && (
                        <div className="-mt-2 flex h-[490px] flex-col items-center justify-center">
                           <NotFoundIcon className={'opacity-[34%]'} />
                           <p className="mt-6 text-2xl font-bold leading-7 text-textBoldColor">
                              Không có nội dung
                           </p>
                           <p className="mt-2 leading-[22px] text-opacity-75">
                              Người dùng này chưa đăng bất kỳ video nào.
                           </p>
                        </div>
                     )}
                  </div>
               </div>
            )}

            {!isFoundUser && (
               <div className="flex h-[calc(100vh-60px-32px)] items-center">
                  <div className="mb-[50%] flex flex-col items-center">
                     <NotFoundIcon className={'mb-12 opacity-[0.34]'} />
                     <p className="mb-2 text-2xl font-bold leading-7">
                        Không thể tìm thấy tài khoản này
                     </p>
                     <p className="text-opacity-75">
                        Bạn đang tìm kiếm video? Hãy thử duyệt tìm tác giả,
                        hashtag và âm thanh thịnh hành của chúng tôi.
                     </p>
                  </div>
               </div>
            )}
         </div>
         <Outlet />
      </>
   )
}

export default Profile
