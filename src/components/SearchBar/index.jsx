// Dependencies
import { AiOutlineSearch } from "react-icons/ai";
// Local | React-Redux
// Styles
import "./searchbar.scss";

function SearchBar() {
  return (
    <form className="searchbar">
      <div className="searchbar__search">
        <AiOutlineSearch className="searchbar__search__icon" />
        <input type="text" className="searchbar__search__input" />
      </div>
      <button
        type="submit"
        onClick={(e) => console.log({ e })}
        className="searchbar__button searchbar__button--submit"
      >
        Search
      </button>
      <button
        type="button"
        onClick={(e) => console.log({ e })}
        className="searchbar__button searchbar__button--all"
      >
        Show All
      </button>
    </form>
  );
}

export default SearchBar;
