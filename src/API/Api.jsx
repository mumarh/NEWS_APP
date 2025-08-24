import axios from "axios";

const API_KEY = "b7ecb5e3e8ae40c3858fe812ba0f4caf";

export const Getapi = (search) => {
  return axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
};
