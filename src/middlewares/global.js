import axios from "axios";
import { HANDLE_API_SEARCH, saveSearchResults } from "Actions/api";

const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
});

const globalMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_API_SEARCH:
      const {
        app: { selector, searchInput },
      } = store.getState();
      const selectedSelector = Object.keys(selector).filter(
        (k) => selector[k]
      )[0];

      axiosInstance
        .get(`${selectedSelector}/?search=${searchInput}`)
        .then((response) => {
          if (response.status === 200) {
            console.log({ response });
            store.dispatch(saveSearchResults(response.data));
          }
        })
        .catch(() => {
          console.log("Error", "An error occured");
        });
      next(action);
      break;
    default:
      next(action);
  }
};

export default globalMiddleWare;
