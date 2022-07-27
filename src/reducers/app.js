import {
  TOGGLE_MENU,
  TOGGLE_SELECTOR,
  SEARCH_INPUT_CONTROL,
  TOGGLE_LOADING,
  TOGGLE_SEARCH,
  TOGGLE_RESULT_MORE
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
  searchFired: false,
  loading: false,
  results: null,
  resultMore: false,
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
        searchInput: "",
        searchFired: false,
        results: null,
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
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case TOGGLE_SEARCH:
      return {
        ...state,
        searchFired: action.value,
      };
    case TOGGLE_RESULT_MORE:
      return {
        ...state,
        resultMore: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
