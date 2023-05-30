import axios from "axios"

const api = axios.create({ baseURL: "http://localgost:8000"});

export default api;