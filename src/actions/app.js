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

export const SEARCH_INPUT_CONTROL = "SEARCH_INPUT_CONTROL";
export const searchInputControl = (value) => ({
  type: SEARCH_INPUT_CONTROL,
  value,
});

export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const toggleLoading = (value) => ({
  type: TOGGLE_LOADING,
  value,
});

export const TOGGLE_SEARCH = "TOGGLE_SEARCH";
export const toggleSearch = (value) => ({
  type: TOGGLE_SEARCH,
  value,
});

export const TOGGLE_RESULT_MORE = "TOGGLE_RESULT_MORE";
export const toggleResultMore = (value, active) => ({
  type: TOGGLE_RESULT_MORE,
  value,
  active,
});
