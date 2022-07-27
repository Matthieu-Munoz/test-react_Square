export const TOGGLE_MENU = "TOGGLE_MENU";
export const toggleMenu = (value) => ({
  type: TOGGLE_MENU,
  value,
});

export const TOGGLE_SELECTOR = "TOGGLE_SELECTOR";
export const toggleSelector = (selector, value) => ({
  type: TOGGLE_SELECTOR,
  selector,
  value,
});

export const SEARCH_INPUT_CONTROL = 'SEARCH_INPUT_CONTROL';
export const searchInputControl = (value) => ({
  type: SEARCH_INPUT_CONTROL,
  value,
});
