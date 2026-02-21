import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-xulz.onrender.com",
});

export default API;