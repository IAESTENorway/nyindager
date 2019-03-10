/**
 * Created by moled on 14.04.2018.
 */
import React, { Component } from 'react';
import FrontImage from '../components/FrontImage'
import Header from "../components/Header"
import TextComponent from "../components/TextComponent";
import RegisterCompany from "../components/RegisterCompany";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";

class Register extends Component {

    render() {
        return (
            <div className="register-frame">
                <Header backButton = "true"/>
            <RegisterForm/>
            </div>
        );
    }
}
export default Register;
