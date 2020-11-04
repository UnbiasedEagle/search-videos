import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import YoutubeSearch from './api/request';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import './App.css';
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  async componentDidMount() {
    const request = await YoutubeSearch.get('/', {
      params: {
        q: 'latest news',
      },
    });

    const response = await request.data;

    this.setState({
      videos: response.items,
      selectedVideo:
        response.items[Math.floor(Math.random() * response.items.length)],
    });
  }

  searchTermSubmit = async (term) => {
    const request = await YoutubeSearch.get('/', {
      params: {
        q: term,
      },
    });

    const response = await request.data;

    this.setState({
      videos: response.items,
      selectedVideo: response.items[0],
    });
  };

  videoClick = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div>
        <SearchBar submit={this.searchTermSubmit}></SearchBar>
        <div className='container'>
          <div className='row'>
            <div className='col s12  l7'>
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className='col s12 l5'>
              <VideoList
                videoClick={this.videoClick}
                videos={this.state.videos}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
