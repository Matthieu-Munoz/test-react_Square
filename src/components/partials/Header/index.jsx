// Dependencies
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
// Local | React-Redux
import { toggleSelector, toggleMenu } from "Actions/app";
import { BurgerIcon } from "../BurgerIcon";
// Styles
import "./header.scss";

function Header() {
  const dispatch = useDispatch();
  const { isMenuOpen, selector } = useSelector((state) => state.app);
  const menuCssClass = classNames("header__mobile ", {
    "header__mobile--hidden": !isMenuOpen,
  });
  // Search Selection CSS class to apply colors
  const peopleCssClass = classNames("header__secondary__title ", {
    "header__secondary__title--active": selector.people,
  });
  const planetsCssClass = classNames("header__secondary__title ", {
    "header__secondary__title--active": selector.planets,
  });
  const filmsCssClass = classNames("header__secondary__title ", {
    "header__secondary__title--active": selector.films,
  });
  const speciesCssClass = classNames("header__secondary__title ", {
    "header__secondary__title--active": selector.species,
  });
  const starshipsCssClass = classNames("header__secondary__title ", {
    "header__secondary__title--active": selector.starships,
  });
  const vehiclesCssClass = classNames("header__secondary__title ", {
    "header__secondary__title--active": selector.vehicles,
  });

  const handleSelection = (clickedSelector, evt = null) => {
    // If in mobile menu, close when clicked
    if (evt) {
      evt.preventDefault();
      dispatch(toggleMenu(false));
    }
    dispatch(toggleSelector(clickedSelector, true));
  };

  return (
    <header className="header">
      <div className="header__main">
        <h2 className="header__main__title">Star Wars</h2>
        <div className="header__main__burger">
          <BurgerIcon />
        </div>
        <div className="header__secondary">
          <h3
            data-searched="People"
            className={peopleCssClass}
            onClick={() => handleSelection("people")}
          >
            People
          </h3>
          <h3
            data-searched="Planets"
            className={planetsCssClass}
            onClick={() => handleSelection("planets")}
          >
            Planets
          </h3>
          <h3
            data-searched="Films"
            className={filmsCssClass}
            onClick={() => handleSelection("films")}
          >
            Films
          </h3>
          <h3
            data-searched="Species"
            className={speciesCssClass}
            onClick={() => handleSelection("species")}
          >
            Species
          </h3>
          <h3
            data-searched="Starships"
            className={starshipsCssClass}
            onClick={() => handleSelection("starships")}
          >
            Starships
          </h3>
          <h3
            data-searched="Vehicles"
            className={vehiclesCssClass}
            onClick={() => handleSelection("vehicles")}
          >
            Vehicles
          </h3>
        </div>
      </div>
      <div className="header__secondary--small">
        <h3
          data-searched="People"
          className={peopleCssClass}
          onClick={() => handleSelection("people")}
        >
          People
        </h3>
        <h3
          data-searched="Planets"
          className={planetsCssClass}
          onClick={() => handleSelection("planets")}
        >
          Planets
        </h3>
        <h3
          data-searched="Films"
          className={filmsCssClass}
          onClick={() => handleSelection("films")}
        >
          Films
        </h3>
      </div>
      <div className={menuCssClass}>
        <a
          href="#"
          className="header__mobile__link"
          onClick={(e) => handleSelection("people", e)}
        >
          <span
            className="header__mobile__link__dot"
            data-searched="People"
          ></span>
          <h4 className="header__mobile__link__title">People</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a
          href="#"
          className="header__mobile__link"
          onClick={(e) => handleSelection("planets", e)}
        >
          <span
            className="header__mobile__link__dot"
            data-searched="Planets"
          ></span>
          <h4 className="header__mobile__link__title">Planets</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a
          href="#"
          className="header__mobile__link"
          onClick={(e) => handleSelection("films", e)}
        >
          <span
            className="header__mobile__link__dot"
            data-searched="Films"
          ></span>
          <h4 className="header__mobile__link__title">Films</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a
          href="#"
          className="header__mobile__link"
          onClick={(e) => handleSelection("species", e)}
        >
          <span
            className="header__mobile__link__dot"
            data-searched="Species"
          ></span>
          <h4 className="header__mobile__link__title">Species</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a
          href="#"
          className="header__mobile__link"
          onClick={(e) => handleSelection("starships", e)}
        >
          <span
            className="header__mobile__link__dot"
            data-searched="Starships"
          ></span>
          <h4 className="header__mobile__link__title">Starships</h4>
          <img
            className="header__mobile__link__icon"
            src="src/assets/icon-chevron.svg"
            alt="chevron icon"
            height="8px"
            width="6px"
          />
        </a>
        <a
          href="#"
          className="header__mobile__link"
          onClick={(e) => handleSelection("vehicles", e)}
        >
          <span
            className="header__mobile__link__dot"
            data-searched="Vehicles"
          ></span>
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
