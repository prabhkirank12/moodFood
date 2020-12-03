import axios from "axios";

export const fetchMapKey = () => {
  return axios.get('/api/third-party/map-key');
}