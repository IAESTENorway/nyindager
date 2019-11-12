import inLogo from "img/in_logo_medium.png";
import React from "react";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, CitiesList } from "routes/utils";
import styles from "./style.module.scss";

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
      <div className={styles.dropdownContainer}>
        <Link to="/program">Program</Link>
        {CitiesList.map(city => (
          <Link
            className={styles.dropdownHidden}
            key={city}
            to={"/" + city + "/program"}
          >
            {capitalizeFirstLetter(city)}
          </Link>
        ))}
      </div>
      <div className={styles.dropdownContainer}>
        <Link to="/about">Om oss</Link>
        {CitiesList.map(city => (
          <Link
            className={styles.dropdownHidden}
            key={city}
            to={"/" + city + "/about"}
          >
            {capitalizeFirstLetter(city)}
          </Link>
        ))}
      </div>
    </nav>
  </header>
);

export default Header;
