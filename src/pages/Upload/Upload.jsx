import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'

function Upload() {
   const navigate = useNavigate()
   useEffect(() => {
      const timer = setTimeout(() => {
         navigate('/login')
      }, 3000)
      return () => clearTimeout(timer)
   })
   return <div>Upload</div>
}

export default Upload
