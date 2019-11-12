import { Location, LocationDescriptor } from "history";
import inLogo from "img/in_logo_medium.png";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

function aboutPathExtender<T>(location: Location<T>): LocationDescriptor<T> {
  const path = location.pathname;
  return {
    ...location,
    pathname: path.endsWith("/about")
      ? path
      : path === "/"
      ? "/about"
      : path + "/about",
  };
}

const Header = () => (
  <header>
    <div>
      <Link to="/" className={styles.linkContainer}>
        <img src={inLogo} alt="Logo" />
        <h5>IAESTEs Næringslivsdager</h5>
      </Link>
    </div>
    <nav>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaZm2GtqhIY6qDknF-6sRLToF156--YQwldpDOqk3UbSDDag/viewform">
        Påmelding
      </a>
      <Link to="/program">Program</Link>
      <Link to={aboutPathExtender}>Om oss</Link>
    </nav>
  </header>
);

export default Header;
