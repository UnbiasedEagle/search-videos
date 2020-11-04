import axios from 'axios';

const YoutubeSearch = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/search',
  params: {
    key: process.env.REACT_APP_API_KEY,
    part: 'snippet',
    type: 'video',
    maxResults: 5,
  },
});

export default YoutubeSearch;
