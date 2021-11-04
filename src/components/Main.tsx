import { useEffect, useState } from "react";
import Gif from "../models/Gif";
import GiphyResponse from "../models/GiphyResponse";
import { getGifsBySearchTerm, getTrendingGifs } from "../services/GiphyService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchterm) {
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    } else {
      getGifsBySearchTerm(searchterm).then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchterm]);

  return (
    <div className="Main">
      <SearchForm setSearchTerm={setSearchTerm} />
      <ResultsList arrayOfGifs={gifs} />
    </div>
  );
};

export default Main;
