import React from 'react';
import './VideoListItem.css'

export const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li className='video-list-item' onClick={() => onVideoSelect(video)}>
      <div className='list-item-container'>
        <div>
          <img alt='video thumbnail' src={imageUrl}/>
        </div>

        <div>
          <div className='list-item-title'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}
