import React from 'react';

export const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect(video)}>
      <div>
        <div>
          <img alt='video thumbnail' src={imageUrl}/>
        </div>

        <div>
          <div>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}
