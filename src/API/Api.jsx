import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const Getapi = (search) => {
  return axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
};
