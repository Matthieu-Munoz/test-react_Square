import { TOGGLE_MENU } from "Actions/app";

export const initialState = {
  isMenuOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
