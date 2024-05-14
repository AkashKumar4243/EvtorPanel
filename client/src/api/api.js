// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Base URL for all requests
  timeout: 10000, // Timeout duration
  headers: {
    'Content-Type': 'application/json',
    // You can add common headers here
  },
});

export default instance;
