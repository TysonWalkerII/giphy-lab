import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setSearchTerm: (searchterm: string) => void;
}

const SearchForm = ({ setSearchTerm }: Props) => {
  const [term, setTerm] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    setSearchTerm(term);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="search-for-a-gif">Search for a GIF</label>
      <input
        type="text"
        name="search-for-a-gif"
        id="search-for-a-gif"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
