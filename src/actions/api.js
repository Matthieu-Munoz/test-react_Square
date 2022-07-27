export const HANDLE_API_SEARCH = "HANDLE_API_SEARCH";
export const handleApiSearch = () => ({
  type: HANDLE_API_SEARCH,
});

export const HANDLE_API_SEARCH_ALL = "HANDLE_API_SEARCH_ALL";
export const handleApiSearchAll = () => ({
  type: HANDLE_API_SEARCH_ALL,
});

export const SAVE_SEARCH_RESULTS = "SAVE_SEARCH_RESULTS";
export const saveSearchResults = (results) => ({
  type: SAVE_SEARCH_RESULTS,
  results,
});
