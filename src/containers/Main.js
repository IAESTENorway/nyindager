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
    const jsonMain = mainData;
    const jsonEvents = eventData;

    console.log(jsonEvents);
        return (
            <div className="Main">
                <Header />
                <FrontImage className = "fade-in" imgUrl={ urlBase + jsonMain.main.frontImg} title={jsonMain.main.frontTitle}/>
                <EventsRow events = {jsonEvents.events}/>
                <TextComponent title={jsonMain.main.mainTitle} text ={jsonMain.main.mainParagraph}/>


                <TextComponent title="Bedrift? Meld din interesse!" bgColor="#79ABC8"/>
                <RegisterCompany/>

                <TextComponent title={jsonMain.purpose.title} text={jsonMain.purpose.text} bgColor="#79ABC8"/>
                <Footer/>

            </div>
        );
    }
}

export default Main;
