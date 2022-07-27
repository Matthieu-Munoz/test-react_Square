// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
// Local | React-Redux
import { searchInputControl } from "Actions/app";
import { handleApiSearch } from "Actions/api";
// Styles
import "./searchbar.scss";

function SearchBar() {
  const dispatch = useDispatch();
  const { searchInput } = useSelector((state) => state.app);
  const handleSearch = (evt) => {
    evt.preventDefault();
    dispatch(handleApiSearch());
  };
  return (
    <form className="searchbar">
      <div className="searchbar__search">
        <AiOutlineSearch className="searchbar__search__icon" />
        <input
          type="text"
          className="searchbar__search__input"
          value={searchInput}
          onChange={(e) => dispatch(searchInputControl(e.currentTarget.value))}
        />
      </div>
      <button
        type="submit"
        onClick={handleSearch}
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
