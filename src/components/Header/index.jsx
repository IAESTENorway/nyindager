import React from 'react';
import { Link } from 'react-router-dom';
import inLogo from '../../img/in_logo_medium.png';
import './style.module.scss';

const Header = () => (
  <header>
    <div>
      <Link to="/">
        <img className="header-logo" src={inLogo} />
      </Link>
      <Link to="/">
        <h5>IAESTEs Næringslivsdager</h5>
      </Link>
    </div>
    <nav>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdaZm2GtqhIY6qDknF-6sRLToF156--YQwldpDOqk3UbSDDag/viewform">Påmelding</a>
      <a href="#top">Program</a>
      <a href="#top">Om oss</a>
    </nav>
  </header>
);

export default Header;
