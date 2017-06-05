import React, { Component } from 'react';
import './App.css'

import { key } from '../../key.js'
import SearchBar from '../SearchBar/SearchBar';
import { VideoList } from '../VideoList/VideoList';
import {VideoDetail} from '../VideoDetail/VideoDetail';
import ProjectForm from '../ProjectForm/ProjectForm';

const API_KEY = key;

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null
    }
  }

  handleFetch(userSearch) {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${userSearch}&type=video&key=${API_KEY}`)
      .then( response => response.json())
      .then( videos =>
        this.setState({
          videos: videos.items,
          selectedVideo: videos.items[0]
        }))
  }

  componentDidMount() {
    this.handleFetch('Woodworking For Mere Mortals');
  }

  render() {
    return (
      <div className="App">
        <header>HobbyTube</header>
        <SearchBar onSearchInputChange={this.handleFetch.bind(this)}/>
        <ProjectForm video={this.state.selectedVideo} />
        <section className='video-data-container'>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
        </section>
      </div>
    );
  }
}
