/**
 * Created by moled on 14.04.2018.
 */
import React from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

const Register = () => (
  <div className="register-frame">
    <Header backButton="true" />
    <RegisterForm />
  </div>
);

export default Register;
