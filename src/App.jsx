import './App.css'
// import { publicRoutes } from './routes/routes'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import NotFound from './pages/Error/Error'
import Upload from './pages/Upload/Upload'
import { defaultLayoutRoutes, headerOnlyRoutes } from './routes/routes'
import Header from './components/Header/Header'

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
               ></Route>
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

            <Route path="*" element={<NotFound />}></Route>
         </Routes>
      </div>
   )
}

export default App
