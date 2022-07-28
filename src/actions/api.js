export const HANDLE_API_SEARCH = "HANDLE_API_SEARCH";
export const handleApiSearch = () => ({
  type: HANDLE_API_SEARCH,
});

export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";
export const saveSearchResults = (results) => ({
  type: SAVE_SEARCH_RESULTS,
  results,
});

export const HANDLE_API_NAVIGATION = "HANDLE_API_NAVIGATION";
export const handleApiNavigation = (direction, link) => ({
  type: HANDLE_API_NAVIGATION,
  direction,
  link,
});
