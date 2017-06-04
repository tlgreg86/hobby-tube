import React, { Component } from 'react';
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  onSearchInputChange(searchInput) {
    // this.setState({ searchInput })
    this.props.onSearchInputChange(searchInput)
  }

  render() {
    return(
      <form className='search-container' onSubmit={(e) => {e.preventDefault()}}>
        <input
          className='search-input'
          value={this.state.searchInput}
          placeholder='Enter hobby search here'
          onChange={event => this.setState({searchInput: event.target.value})} />
        <button
          className='submit-button'
          onClick={() => {this.onSearchInputChange(this.state.searchInput)}}>Submit</button>
      </form>
    )
  }
}
