import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

function NotFound() {
   return (
      <div className="flex justify-center items-center h-screen flex-col">
         <h4>Oops...NotFound 404</h4>
         <Link className="border  inline-block rounded-md mt-4" to="/">
            <Button className="hover:bg-slate-200 px-3 py-2">
               Return to Homepage
            </Button>
         </Link>
      </div>
   )
}

export default NotFound
