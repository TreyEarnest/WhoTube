import React from "react"

class SearchBar extends React.Component {
  state = { term: '' }
  // method for changing input in search bar when text is changed, or typed
  onInputChange = event => {
    this.setState({ term: event.target.value})
  }
  onFormSubmit = event => {
    event.preventDefault()

    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
    // className calls are from semantic ui CSS
    <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
          type="text" 
          value={this.state.term}
          // call onInputChnage method
          onChange={this.onInputChange}
          />
        </div>
      </form>
    </div>
    )
  }
}

export default SearchBar