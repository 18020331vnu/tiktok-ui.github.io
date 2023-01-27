import './App.css'
// import { publicRoutes } from './routes/routes'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/Error/Error'
import Home from './pages/Home/Home'
import Following from './pages/Following/Following'
import Profile from './pages/Profile/Profile'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DefaultLayout from './layouts/DefaultLayout'
import { publicRoutes } from './routes/routes'

function App() {
   return (
      <div className="App">
         {/* <DefaultLayout> */}
         <Routes>
            {publicRoutes.map((route) => (
               <Route
                  key={route.path}
                  path={route.path}
                  element={<DefaultLayout>{route.element}</DefaultLayout>}
               ></Route>
            ))}
            <Route path="*" element={<NotFound />} />
         </Routes>
         {/* </DefaultLayout> */}
         {/* <Routes>
            {/* {publicRoutes.map((route) => (
               <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
               />
            ))} */}
         {/* </Routes> */}
      </div>
   )
}

export default App
