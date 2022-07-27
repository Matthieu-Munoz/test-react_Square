// Dependencies
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
// React-Redux
import { toggleMenu } from "Actions/app";
// Styles
import "./burgericon.scss";

export function BurgerIcon() {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.app);
  const burgerCssClass = classNames(
    "burgericon ",
    {
      "is-open": isMenuOpen,
    },
    {
      "is-closed": !isMenuOpen,
    }
  );

  return (
    <div
      className={burgerCssClass}
      onClick={() => dispatch(toggleMenu(!isMenuOpen))}
    >
      <div className="line-top"></div>
      <div className="line-middle"></div>
      <div className="line-bottom"></div>
    </div>
  );
}
