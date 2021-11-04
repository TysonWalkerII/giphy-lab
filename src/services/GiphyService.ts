import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";
const key: string = process.env.REACT_APP_GIPHY_KEY || "";

// function for trending
export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      return response.data;
    });
};

//function for search term
export const getGifsBySearchTerm = (
  searchTerm: string
): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: key,
        q: searchTerm,
      },
    })
    .then((response) => {
      return response.data;
    });
};
