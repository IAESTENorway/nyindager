import React, { Component } from 'react';
import inLogo from "../img/in_logo_medium.png"
import {Link} from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <header>
                <ul className="nav ">
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
            </header>
        );
    }
}

export default Header;
