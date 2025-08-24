// src/API/Api.js
import axios from "axios";

// Make sure you have VITE_WEATHER_API_KEY set in your .env file
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

/**
 * Fetch news or weather data based on search keyword
 * @param {string} search - The keyword or location to search
 * @returns {Promise} - Axios GET request promise
 */
export const Getapi = (search) => {
  if (!API_KEY) {
    throw new Error("VITE_WEATHER_API_KEY is not defined in your .env file");
  }

  return axios.get(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&apiKey=${API_KEY}`
  );
};
