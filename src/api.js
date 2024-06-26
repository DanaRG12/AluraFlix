import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/videos', 
});

export default api;
