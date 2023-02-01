import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Upload() {
   const isLogin = !!localStorage.getItem('token')
   const navigate = useNavigate()
   useEffect(() => {
      if (isLogin) return

      const timer = setTimeout(() => {
         navigate('/login')
      }, 3000)
      return () => clearTimeout(timer)
   })
   return <div>Upload</div>
}

export default Upload
