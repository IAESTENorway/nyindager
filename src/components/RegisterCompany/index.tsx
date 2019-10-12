import React from "react";
import { Link } from "react-router-dom";

const RegisterCompany = () => (
  <div className="register-company">
    <Link to="/register">
      <button type="button" className="btn-goto-register">
        <h2>Meld inn bedrift</h2>
      </button>
    </Link>
  </div>
);

export default RegisterCompany;
