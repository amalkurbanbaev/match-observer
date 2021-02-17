import axios from "axios";
import TOKEN from './TOKEN.json';

export default axios.create({
  baseURL: "https://api.pandascore.co/",
  responseType: "json",
  headers: { Authorization: `Bearer ${TOKEN.ACCESS_TOKEN}` }
});