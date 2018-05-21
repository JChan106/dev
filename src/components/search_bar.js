import React, { Component } from "react";
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    const ROOT_URL = `http://ZiptasticAPI.com/${this.state.term}`
    console.log(ROOT_URL);
    const request = axios.get(ROOT_URL);
    request.then(function(result) {
      console.log(result['data']);
      window.alert(result['data']['city']);
    });
    event.preventDefault();
    this.state.term

    this.setState({
      term: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="search-bar">
        <input
          className="insearch"
          placeholder="Type your zipcode here..."
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='subbtn'><button type='submit' className='btn submit-button'>s</button></span>
      </form>
    );
  }

}

export default SearchBar;
