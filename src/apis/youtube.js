import axios from "axios";

// API key for YouTube Data
const KEY = "AIzaSyC5afBZGUk7rZxYb3jvDHcP0ErB5w94JU0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY
  }
});
