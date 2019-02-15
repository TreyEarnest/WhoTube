import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoList from "./VideoList"

class App extends React.Component {
  //init state with key of videos and value is an array
  state = { videos: [] }
  onTermSubmit = async (term) => {
    //axios call for youtube api
    const response = await youtube.get("/search", {
      //params short for parameters
      params: {
        // use "q" for the query param
        q: term
      }
    })
    // setting state to the the value items from the response
    this.setState({ videos: response.data.items})
  }

  render() {
    return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onTermSubmit}/>
      <VideoList videos={this.state.videos} />
    </div>
    )
  }
}

export default App
