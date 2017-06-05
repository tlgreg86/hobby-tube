import React, {Component} from 'react';
import './VideoDetail.css'

export default class VideoDetail extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      projects: [],
      selectedProject: '',
      projectContents: {}
    }
  }

  handleProjectSubmit(input) {
    this.state.projects.push(input)
    this.setState({
      input: ''
    })
  }

  handleAddVideoToProject(id, video) {
    const projectObj = {[id]: video, projectName: {project: this.state.selectedProject}}
    const addObject = Object.assign(this.state.projectContents, projectObj)
    this.setState({
      projectContents: addObject
    })
  }

  render() {
    if (!this.props.video) {
      return <section>Loading...</section>
    }

    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`

    return(
      <section className='main-container'>
        <form
          onSubmit={(e) => {e.preventDefault()}}
          className='new-idea-form'>
          <input
            value={this.state.input}
            onChange={(e) => this.setState({input: e.target.value})}
            className='create-new-project'
            placeholder='Create new project' />
          <button
            className='submit-new-project'
            onClick={() => {this.handleProjectSubmit(this.state.input)}}>Submit</button>
          <br/>
          <br/>
          <select
            onChange={(e) => this.setState({selectedProject: e.target.value})}
            className='project-dropdown'>
            <option>Add video to a project</option>
            {this.state.projects.map((project, index) => {
              return(
                <option key={index}>{project}</option>
              )
            })}
          </select>
          <button onClick={() => {this.handleAddVideoToProject(this.props.video.id.videoId, this.props.video.snippet.thumbnails.default.url)}}>Submit</button>
        </form>
        <section>
          <iframe src={url} title={this.props.video.snippet.title}></iframe>
        </section>
        <section className='details-container'>
          <section className='main-snippet-title'>{this.props.video.snippet.title}</section>
          <section className='main-snippet-description'>{this.props.video.snippet.description}</section>
        </section>
      </section>
    )
  }
}
