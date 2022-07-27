// Dependencies
// Local | React-Redux";
import Header from "./partials/Header";
import SearchBar from "./SearchBar";
import ResultPanel from "./ResultPanel";
// Styles
import "Styles/app.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <ResultPanel />
    </div>
  );
}

export default App;
