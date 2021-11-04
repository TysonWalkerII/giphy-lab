import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Prop {
  arrayOfGifs: Gif[];
}

const ResultsList = ({ arrayOfGifs }: Prop) => {
  return (
    <div className="ResultsList">
      {arrayOfGifs.map((gif) => (
        <Result key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default ResultsList;
