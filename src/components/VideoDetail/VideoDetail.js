import React from 'react';
import './VideoDetail.css'

export const VideoDetail = ({ video }) => {
  if (!video) {
    return <section>Loading...</section>
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`

  return(
    <section className='main-container'>
      <form
        onSubmit={(e) => {e.preventDefault()}}
        className='new-idea-form'>
        <input
          className='create-new-project'
          placeholder='Create new project' />
        <button
          className='submit-new-project'>Submit</button>
        <br/>
        <br/>
        <select className='project-dropdown'>
          <option>Add video to a project</option>
        </select>
        <button>Submit</button>
      </form>
      <section>
        <iframe src={url} title={video.snippet.title}></iframe>
      </section>
      <section className='details-container'>
        <section className='main-snippet-title'>{video.snippet.title}</section>
        <section className='main-snippet-description'>{video.snippet.description}</section>
      </section>
    </section>
  )
}
