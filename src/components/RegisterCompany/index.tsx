import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const RegisterCompany = () => (
  <div className="register-company">
    <Link to="/register">
      <button type="button" className={style.registerButton}>
        <h2>Meld inn bedrift</h2>
      </button>
    </Link>
  </div>
);

export default RegisterCompany;
