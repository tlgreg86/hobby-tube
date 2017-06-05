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
    const addProject = Object.assign({}, this.state.projectContents, {[input]: []})
    this.setState({
      input: '',
      projectContents: addProject
    })
  }

  handleAddVideoToProject(project, videoTitle) {
    this.state.projectContents[project].push({video: videoTitle})
    const newProjectContents = this.state.projectContents
    this.setState({
      projectContents: newProjectContents
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
          <button onClick={() => {this.handleAddVideoToProject(this.state.selectedProject, this.props.video.snippet.title)}}>Submit</button>
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
