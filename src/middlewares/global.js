import axios from "axios";
import {
  HANDLE_API_SEARCH,
  saveSearchResults,
  HANDLE_API_NAVIGATION,
} from "Actions/api";
import { toggleLoading } from "Actions/app";

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
        .get(`${selectedSelector}${searchInput && `/?search=${searchInput}`}`)
        .then((response) => {
          if (response.status === 200) {
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
    case HANDLE_API_NAVIGATION:
      store.dispatch(toggleLoading(true));
      axiosInstance
        .get(`${action.link}`)
        .then((response) => {
          if (response.status === 200) {
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
