import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="header__link" to="/">
        <img className="header__img" src="./logo.svg" alt="logo du site kasa" />
      </Link>
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink className="header__link" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="header__link" to="/about">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
