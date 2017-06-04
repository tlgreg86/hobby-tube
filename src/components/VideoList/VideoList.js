import React from 'react';
import { VideoListItem } from '../VideoListItem/VideoListItem';
import './VideoList.css';

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
    <div className='video-list-container'>
      <ul className='video-list'>
        {videoItems}
      </ul>
    </div>
  )
}
