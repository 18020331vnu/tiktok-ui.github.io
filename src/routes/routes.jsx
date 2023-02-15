import VideoModal from '../components/Video/VideoModal'
import Following from '../pages/Following/Following'
import Home from '../pages/Home/Home'
import Live from '../pages/Live/Live'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Upload from '../pages/Upload/Upload'

export const defaultLayoutRoutes = [
   {
      path: '/',
      element: <Home />,
      child: {
         path: 'video/:uuid',
         element: <VideoModal />,
      },
   },
   {
      path: '/following',
      element: <Following />,
      child: {
         path: 'video/:uuid',
         element: <VideoModal />,
      },
   },
   {
      path: '/@:nickname',
      element: <Profile />,
      child: {
         path: 'video/:uuid',
         element: <VideoModal />,
      },
   },
   {
      path: '/live',
      element: <Live />,
   },
]
export const headerOnlyRoutes = [
   { path: '/login', element: <Login /> },
   {
      path: '/upload',
      element: <Upload />,
   },
]
