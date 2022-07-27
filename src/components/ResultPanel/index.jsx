// Dependencies
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import ResultDetails from "./ResultDetails";
// Local | React-Redux
import { toggleResultMore } from "Actions/app";
// Styles
import "./resultpanel.scss";

function ResultPanel() {
  const dispatch = useDispatch();
  const { searchInput, searchFired, loading, results, selector, resultMore } =
    useSelector((state) => state.app);
  const cursorCssClass = classNames("resultpanel__search ", {
    "resultpanel__search--animate": !searchFired,
  });

  const selectedSelector = Object.keys(selector).filter((k) => selector[k])[0];

  const resultSelector = classNames(
    {
      name: selectedSelector !== "films",
    },
    {
      title: selectedSelector === "films",
    }
  );
  return (
    <div className="resultpanel">
      <div className={cursorCssClass}>&gt; Search : {searchInput}</div>
      {loading && <div>...</div>}
      {!loading && results && (
        <div>
          <div>&gt; {results.count} Results :</div>
          {results.results.map((result, n) => {
            return (
              <div
                key={n}
                className="resultpanel__result"
                onClick={() => dispatch(toggleResultMore(result))}
              >
                - {result[resultSelector]}
              </div>
            );
          })}
          {resultMore && <ResultDetails />}
        </div>
      )}
    </div>
  );
}

export default ResultPanel;
