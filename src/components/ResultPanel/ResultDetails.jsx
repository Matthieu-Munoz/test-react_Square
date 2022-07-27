// Dependencies
import { useSelector, useDispatch } from "react-redux";
// Local | React-Redux
// Styles

function ResultDetails() {
  const dispatch = useDispatch();
  const { resultMore } = useSelector((state) => state.app);
  console.log({ resultMore });
  return (
    <div className="resultdetails">
      <>data</>
    </div>
  );
}

export default ResultDetails;
