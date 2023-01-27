import { useRef, useState } from 'react'
import { useEffect } from 'react'
import mytvApi from '../../api/mytvApi'
import Button from '../../components/Button/Button'

function Home() {
   const [count, setCount] = useState(1)
   const [mygift, setMygift] = useState([])
   const timer = useRef()
   useEffect(() => {
      console.log(mygift.length)
      if (mygift.length > 100) {
         setMygift([])
         return
      }
      const gift = async () => {
         await fetch(
            'https://itvaw.mytv.vn/api/v1/lucky/check?&uuid=bbbe79aa22ddb80648fc6bdde57daac&time=2023y01m27d_03h33m45s597ms',
            {
               headers: {
                  accept: 'application/json, text/plain, */*',
                  'accept-language': 'vi',
                  'access-control-allow-origin': '*',
                  authorization:
                     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjowLCJpcCI6IjEwMy4xODQuOTYuMTciLCJtYW51ZmFjdHVyZXJfaWQiOiJiMmE3ZjE3YmQwNmM4NDIwNzdlOTlmYWM5ZWRkZTM1MyIsImV4cGlyZSI6MTY3NDg0NjAxNCwiYm9keSI6IkIyQy0tRUNPLS03MjUzMjI5LS1iMmE3ZjE3YmQwNmM4NDIwNzdlOTlmYWM5ZWRkZTM1MyIsImlhdCI6MTY3NDc1OTYxNH0.11zrnHC-Iw8CEre3gjN_OKkweEUH9p72Oz8fBfUrrdA',
                  'content-type': 'application/json',
                  macaddress: '33cbde122739498371c425f2ff76c06a',
                  'sec-ch-ua':
                     '"Not?A_Brand";v="8", "Chromium";v="108", "Yandex";v="23"',
                  'sec-ch-ua-mobile': '?0',
                  'sec-ch-ua-platform': '"macOS"',
                  'sec-fetch-dest': 'empty',
                  'sec-fetch-mode': 'cors',
                  'sec-fetch-site': 'cross-site',
                  withcredentials: 'true',
                  Referer: 'https://mytv.com.vn/',
                  'Referrer-Policy': 'strict-origin-when-cross-origin',
               },
               body: '{}',
               method: 'POST',
            }
         )
            .then((res) => res.json())
            .then((data) => {
               console.log(data)
               setMygift([data.message, ...mygift])
               if (data.data.PRIZE_MESSAGE.includes('đã trúng')) {
                  clearTimeout(timer.current)
               }
            })
      }
      setTimeout(gift, 100)

      return () => {
         clearTimeout(timer.current)
      }
   }, [mygift])
   const handleClick = () => {
      clearTimeout(timer.current)
   }
   const handleResume = () => {
      setCount(count + 1)
   }

   try {
      return (
         <div className="flex-grow">
            <Button onClick={handleClick}>Dừng</Button>
            <Button onClick={handleResume}>Tiếp tục</Button>
            {mygift.map((item, index) => {
               // console.log(mygift)
               return <p key={index}>{item}</p>
            })}
         </div>
      )
   } catch (error) {
      console.log(error)
   }
}

export default Home
