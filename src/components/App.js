import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  //init state with key of videos and value is an array
  state = { videos: [], selectedVideo: null };
  // method for placing a default search when the page loads
  componentDidMount() {
    this.onTermSubmit("React JS");
  }
  onTermSubmit = async term => {
    //axios call for youtube api
    const response = await youtube.get("/search", {
      //params short for parameters
      params: {
        // use "q" for the query param
        q: term
      }
    });
    // setting state to the the value items from the response
    // seclectedVideo will put the first item in the items array in the video player
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  // when video is selected, do something
  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  // render method
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
