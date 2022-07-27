// Dependencies
import classNames from "classnames";
import { useSelector } from "react-redux";
// Local | React-Redux
import { BurgerIcon } from "../BurgerIcon";
// Styles
import "./header.scss";

function Header() {
  const { isMenuOpen } = useSelector((state) => state.app);
  const menuCssClass = classNames("header__mobile ", {
    "header__mobile--hidden": !isMenuOpen,
  });
  return (
    <header className="header">
      <div className="header__main">
        <h2 className="header__main__title">Star Wars</h2>
        <div className="header__main__burger">
          <BurgerIcon />
        </div>
        <div className="header__secondary">
          <h3 className="header__secondary__title header__secondary__title--active">
            People
          </h3>
          <h3 className="header__secondary__title">Planets</h3>
          <h3 className="header__secondary__title">Films</h3>
          <h3 className="header__secondary__title">Species</h3>
          <h3 className="header__secondary__title">Starships</h3>
          <h3 className="header__secondary__title">Vehicles</h3>
        </div>
      </div>
      <div className="header__secondary--small">
        <h3 className="header__secondary__title header__secondary__title--active">
          People
        </h3>
        <h3 className="header__secondary__title">Planets</h3>
        <h3 className="header__secondary__title">Films</h3>
      </div>
      <div className={menuCssClass}>
        <a href="#" className="header__mobile__link">
          <span className="header__mobile__link__dot dot--people"></span>
          <h4 className="header__mobile__link__title">People</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a href="#" className="header__mobile__link">
          <span className="header__mobile__link__dot dot--planets"></span>
          <h4 className="header__mobile__link__title">Planets</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a href="#" className="header__mobile__link">
          <span className="header__mobile__link__dot dot--films"></span>
          <h4 className="header__mobile__link__title">Films</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a href="#" className="header__mobile__link">
          <span className="header__mobile__link__dot dot--species"></span>
          <h4 className="header__mobile__link__title">Species</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a href="#" className="header__mobile__link">
          <span className="header__mobile__link__dot dot--starships"></span>
          <h4 className="header__mobile__link__title">Starships</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a href="#" className="header__mobile__link">
          <span className="header__mobile__link__dot dot--vehicles"></span>
          <h4 className="header__mobile__link__title">Vehicles</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
