import React, { useState } from 'react'
import authApi from '../../api/authApi'
import { useNavigate } from 'react-router-dom'

function Login(props) {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [errorMessage, setErrorMessage] = useState('')
   const navigate = useNavigate()

   const handleSubmit = async () => {
      try {
         setErrorMessage('Đang đăng nhập')
         const response = await authApi.login({
            email: email,
            password: password,
         })
         console.log(response)
         localStorage.setItem('token', response.meta.token)
         setErrorMessage('Đăng nhập thành công')
         setTimeout(() => {
            navigate('/')
         }, 2000)
      } catch (error) {
         console.log(error)
         setErrorMessage('Đăng nhập thất bại')
      }

      //   var data = JSON.stringify({
      //      email: email,
      //      password: password,
      //   })
      //   var config = {
      //      method: 'post',
      //      url: 'https://tiktok.fullstack.edu.vn/api/auth/login',
      //      headers: {
      //         Authorization: 'Bearer etoken',
      //         'Content-Type': 'application/json',
      //      },
      //      data: data,
      //   }
      //   axios(config)
      //      .then(function (response) {
      //         console.log(JSON.stringify(response.data))
      //      })
      //      .catch(function (error) {
      //         console.log(error)
      //      })
   }

   return (
      <div className="mt-32">
         <p>{errorMessage}</p>
         <form>
            Email
            <input
               value={email}
               type="email"
               className="border"
               placeholder="email"
               onChange={(e) => setEmail(e.target.value)}
            />
            Password
            <input
               value={password}
               type="password"
               className="border"
               placeholder="password"
               onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSubmit} type="submit">
               Đăng nhập
            </button>
         </form>
      </div>
   )
}

Login.propTypes = {}

export default Login
