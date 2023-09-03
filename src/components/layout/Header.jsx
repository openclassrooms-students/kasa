import { Link } from "react-router-dom";
import styles  from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        <img className={styles.img} src="/logo.svg" alt="logo du site kasa" />
      </Link>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link className={styles.link} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/about">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
