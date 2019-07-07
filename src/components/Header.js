import React, { Component } from 'react';
import inLogo from "../img/in_logo_medium.png"
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header className="cf">
                <ul className="nav center">
                    <li className="nav-item">
                        <Link to ="/">
                        <img className="header-logo" src={inLogo}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/">
                        <h5 className="header-title">IAESTEs Næringslivsdager</h5>
                    </Link>
                    </li>
                </ul>
                <nav className="main-nav">
                  <ul>
                    <li className="nav-item custom-nav">
                      <a href="#top">
                        Påmelding
                      </a>
                    </li>
                    <li className="nav-item custom-nav">
                      <a href="#top">
                        Program
                      </a>
                    </li>
                    <li className="nav-item custom-nav">
                      <a href="#top">
                        For bedrifter
                      </a>
                    </li>
                    <li className="nav-item custom-nav">
                      <a href="#top">
                        Om oss
                      </a>
                    </li>
                  </ul>
              </nav>
           </header>
        );
    }
}

export default Header;
