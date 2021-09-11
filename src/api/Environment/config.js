import axios from 'axios';
//producccion
//const BASE_URL = "https:";
//desarrollo
const BASE_URL = "http://127.0.0.1:8000";
//http://127.0.0.1:8000/usuario/usuario/

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Origin': 'http://localhost:3000/*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
});

export default API;