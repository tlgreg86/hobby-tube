import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from '../search_bar/search_bar';
import { VideoList } from '../video_list/video_list';
import { VideoDetail } from '../video_detail/video_detail';

const API_KEY = 

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
    const videoSearch = _.debounce((userSearch) => { this.handleFetch(userSearch) }, 300)

    return (
      <div className="App">
        <SearchBar onSearchInputChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
}
