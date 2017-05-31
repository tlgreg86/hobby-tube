import React from 'react';
import { VideoListItem } from '../VideoListItem/VideoListItem'

export const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return(
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect}/>
    )
  })

  return(
    <ul className='video-list'>
      {videoItems}
    </ul>
  )
}
