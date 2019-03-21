/**
 * Created by moled on 14.04.2018.
 */
import React, { Component } from 'react';
import {Link} from "react-router-dom";

class RegisterCompany extends Component {
    render() {

        return (

            <div className="register-company">
                <Link to ="/register">
                    <button type="button" className="btn btn btn-outline-light btn-goto-register"><h2>Meld inn bedrift</h2></button>
                </Link>
            </div>

        );
    }
}

export default RegisterCompany;
