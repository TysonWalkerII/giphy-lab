import Gif from "../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  return (
    <li className="Result">
      <p>{gif?.title}</p>
      <img src={gif?.images.original.url} alt="gif" />
      <a href={gif?.url}>Link to GIPHY</a>
    </li>
  );
};

export default Result;
