import axios from "axios";

export const API = axios.create({
  baseURL: "http://192.168.43.84:5000/api/v1/",
});
