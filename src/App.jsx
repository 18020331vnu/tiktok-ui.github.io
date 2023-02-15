import './App.css'
// import { publicRoutes } from './routes/routes'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import NotFound from './pages/Error/Error'
import Upload from './pages/Upload/Upload'
import { defaultLayoutRoutes, headerOnlyRoutes } from './routes/routes'
import Header from './components/Header/Header'
import VideoModal from './components/Video/VideoModal'
import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'

function App() {
   return (
      <div className="App">
         {/* <DefaultLayout> */}
         <Routes>
            {defaultLayoutRoutes.map((route) => (
               <Route
                  key={route.path}
                  path={route.path}
                  element={<DefaultLayout>{route.element}</DefaultLayout>}
               >
                  {route.child ? (
                     <Route
                        path={route.child.path}
                        element={route.child.element}
                     />
                  ) : null}
               </Route>
            ))}

            {headerOnlyRoutes.map((route) => (
               <Route
                  key={route.path}
                  path={route.path}
                  element={
                     <>
                        <Header />
                        {route.element}
                     </>
                  }
               />
            ))}

            <Route path="*" element={<NotFound />} />
         </Routes>
         <Outlet />
      </div>
   )
}

export default App
