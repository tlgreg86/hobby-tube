import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ''
    }
  }

  onSearchInputChange(searchInput) {
    this.setState({ searchInput })
    this.props.onSearchInputChange(searchInput)
  }

  render() {
    return(
      <input
        value={this.props.value}
        onChange={event => this.onSearchInputChange(event.target.value)}/>
    )
  }
}
