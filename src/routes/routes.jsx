import Following from '../pages/Following/Following'
import Home from '../pages/Home/Home'
import Live from '../pages/Live/Live'
import Profile from '../pages/Profile/Profile'
import Upload from '../pages/Upload/Upload'

export const publicRoutes = [
   {
      path: '/',
      element: <Home />,
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

export const privateRoutes = [
   {
      path: '/upload',
      component: <Upload />,
   },
]
