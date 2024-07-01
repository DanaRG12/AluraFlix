import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/DanaRG12/AluraFlix/db', 
});

export default api;
