import React, { Component } from 'react'


//Expecting a function to change the state from the App component

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {
      name: '',
      startDate: '',
      endDate: '',
      category: ''
    };

  }

  submitSearch() {

    this.props.searchFunction(this.state)
    this.setState({
      name:'',
      startDate:'',
      endDate:'',
      category:'',
    })
  }
  onInputChange(val, inputType) {

    this.setState({ inputType: val })
  }

  render() {
    return (
      <div className=" row form-group">
      
      <div className="search-bar input-group">
        <input
          value={this.state.name}
          onChange={event => this.onInputChange(event.target.value, 'name')}
          placeholder='Enter Surname' />

        <input
          value={this.state.startDate}
          onChange={event => this.onInputChange(event.target.value, 'startDate')}
          placeholder='Start Date (YYYY-MM-DD)' />

        <input
          value={this.state.endDate}
          onChange={event => this.onInputChange(event.target.value, 'endDate')}
          placeholder='End Date (YYYY-MM-DD)' />

        <input
          value={this.state.category}
          onChange={event => this.onInputChange(event.target.value, 'category')}
          placeholder='Category (e.g "Piracy"' />
        <button onClick={() => this.submitSearch()} className="btn btn-default">Search</button>
      </div>
      </div>
   
    )
  }
}

export default SearchBar;