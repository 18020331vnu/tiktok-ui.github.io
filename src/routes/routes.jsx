import Following from '../pages/Following/Following'
import Home from '../pages/Home/Home'
import Home1 from '../pages/Home/Home1'
import Live from '../pages/Live/Live'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import Upload from '../pages/Upload/Upload'

export const defaultLayoutRoutes = [
   {
      path: '/',
      element: <Home1 />,
   },
   {
      path: '/following',
      element: <Following />,
   },
   {
      path: '/@:nickname',
      element: <Profile />,
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
