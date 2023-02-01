import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Video from '../../components/Video/Video'
import videoApi from '../../api/videoApi'

function Home1(props) {
   const [videoList, setVideoList] = useState([])
   const [page, setPage] = useState(1)

   useEffect(() => {
      const getVideoList = async () => {
         const response = await videoApi.getVideoList({
            type: 'for-you',
            page: page,
         })
         setVideoList(response.data)
      }
      getVideoList()
   }, [])
   return (
      <div>
         {videoList.map((video) => (
            <Video key={video.id} />
         ))}
      </div>
   )
}

Home1.propTypes = {}

export default Home1
