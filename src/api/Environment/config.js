  import axios from 'axios';
    //producccion
   //const BASE_URL = "https:";
   //desarrollo
   const BASE_URL = "http://127.0.0.1:8000/";
   //http://127.0.0.1:8000/usuario/usuario/
  
  const API = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-type": "application/json"
    }
  });
  
  export default API;