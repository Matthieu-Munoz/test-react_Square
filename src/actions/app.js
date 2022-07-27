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
