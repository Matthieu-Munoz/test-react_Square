import {
  TOGGLE_MENU,
  TOGGLE_SELECTOR,
  SEARCH_INPUT_CONTROL,
} from "Actions/app";
import { SAVE_SEARCH_RESULTS } from "Actions/api";

export const initialState = {
  searchInput: "",
  isMenuOpen: false,
  selector: {
    people: true,
    planets: false,
    films: false,
    species: false,
    starships: false,
    vehicles: false,
  },
  results: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_INPUT_CONTROL:
      return {
        ...state,
        searchInput: action.value,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: action.value,
      };
    case TOGGLE_SELECTOR:
      return {
        ...state,
        selector: {
          ...state.selector,
          people: false,
          planets: false,
          films: false,
          species: false,
          starships: false,
          vehicles: false,
          [action.selector]: action.value,
        },
      };
    case SAVE_SEARCH_RESULTS:
      return {
        ...state,
        results: action.results,
      };
    default:
      return state;
  }
};

export default reducer;
