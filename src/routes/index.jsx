import Following from '../pages/Following/Following'
import Home from '../pages/Home/Home'
import Profile from '../pages/Profile/Profile'
import Upload from '../pages/Upload/Upload'

export const publicRoutes = [
   {
      path: '/',
      component: <Home />,
   },
   {
      path: '/following',
      component: <Following />,
   },
   {
      path: '/@:nickname',
      component: <Profile />,
   },
]

export const privateRoutes = [
   {
      path: '/upload',
      component: <Upload />,
   },
]
