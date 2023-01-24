import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

function NotFound() {
   return (
      <div className="flex h-screen flex-col items-center justify-center">
         <h4>Oops...NotFound 404</h4>
         <Link className="mt-4 inline-block rounded-md border" to="/">
            <Button className="px-3 py-2 hover:bg-slate-200">
               Return to Homepage
            </Button>
         </Link>
      </div>
   )
}

export default NotFound
