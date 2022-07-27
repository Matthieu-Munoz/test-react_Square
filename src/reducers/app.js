import { TOGGLE_MENU, TOGGLE_SELECTOR } from "Actions/app";

export const initialState = {
  isMenuOpen: false,
  selector: {
    people: true,
    planets: false,
    films: false,
    species: false,
    starships: false,
    vehicles: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
