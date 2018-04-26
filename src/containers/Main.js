/**
 * Created by moled on 14.04.2018.
 */
import React, { Component } from 'react';
import FrontImage from '../components/FrontImage'
import Header from "../components/Header"
import TextComponent from "../components/TextComponent";
import EventsRow from "../components/EventsRow";
import RegisterCompany from "../components/RegisterCompany";
import Footer from "../components/Footer";
import mainData from "../data.json";
import eventData from "../events.json";

class Main extends Component {
    render() {
    const urlBase = "http://pires.no";
    const jsonMain = mainData.main;
    const jsonEvents = eventData.events;

    console.log(jsonEvents);
        return (
            <div className="Main">
                <Header />
                <FrontImage className = "fade-in" imgUrl={ urlBase + jsonMain.frontImg} title={jsonMain.frontTitle}/>
                <TextComponent title={jsonMain.mainTitle} text ={jsonMain.mainParagraph}/>
                <TextComponent title="Arrangementer" text ="" bgColor="#223847"/>
                <EventsRow events = {jsonEvents}/>
                <TextComponent title="Bedrift? Meld din interesse!" bgColor="#79ABC8"/>
                <RegisterCompany/>
                <Footer/>

            </div>
        );
    }
}

export default Main;
