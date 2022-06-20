import axios from "axios";

const KEY = "AIzaSyBdW1zHlpusq1f74s6dODimLbME7aaUE1g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
