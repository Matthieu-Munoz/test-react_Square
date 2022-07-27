import axios from "axios";
import { HANDLE_API_SEARCH, saveSearchResults } from "Actions/api";
import { toggleLoading } from "Actions/app";
import { HANDLE_API_SEARCH_ALL } from "../actions/api";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

const globalMiddleWare = (store) => (next) => (action) => {
  const {
    app: { selector, searchInput },
  } = store.getState();
  let selectedSelector;

  switch (action.type) {
    case HANDLE_API_SEARCH:
      store.dispatch(toggleLoading(true));
      selectedSelector = Object.keys(selector).filter((k) => selector[k])[0];

      axiosInstance
        .get(`${selectedSelector}/?search=${searchInput}`)
        .then((response) => {
          if (response.status === 200) {
            console.log({ response });
            store.dispatch(toggleLoading(false));
            store.dispatch(saveSearchResults(response.data));
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false));
          console.log("Error", "An error occured");
        });
      next(action);
      break;
    case HANDLE_API_SEARCH_ALL:
      store.dispatch(toggleLoading(true));
      selectedSelector = Object.keys(selector).filter((k) => selector[k])[0];

      axiosInstance
        .get(`${selectedSelector}`)
        .then((response) => {
          if (response.status === 200) {
            console.log({ response });
            store.dispatch(toggleLoading(false));
            store.dispatch(saveSearchResults(response.data));
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false));
          console.log("Error", "An error occured");
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default globalMiddleWare;
