import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Video from '../../components/Video/Video'
import videoApi from '../../api/videoApi'

function Home(props) {
   const [videoList, setVideoList] = useState([])
   const [page, setPage] = useState(1)

   useEffect(() => {
      const getVideoList = async () => {
         const response = await videoApi.getVideoList({
            type: 'for-you',
            page: page,
         })
         console.log(response.data)
         setVideoList(response.data)
      }
      getVideoList()
   }, [])
   return (
      <div>
         {videoList.map((video) => (
            <Video key={video.id} data={video} />
         ))}
      </div>
   )
}

Home.propTypes = {}

export default Home
