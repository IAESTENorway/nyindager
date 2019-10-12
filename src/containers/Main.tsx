import React from "react";
// import TextComponent from '../components/TextComponent';
import EventsRow from "../components/Events/EventsRow";
import FrontImage from "../components/FrontImage";
import RegisterCompany from "../components/RegisterCompany";
import { events, main /* purpose */ } from "../resources/data";

const urlBase = "http://pires.no";

const Main = () => (
  <>
    <FrontImage
      className="fade-in"
      image={urlBase + main.frontImg}
      title={main.frontTitle as string}
    />
    <EventsRow events={events} />
    {/* <TextComponent title={main.mainTitle} text={main.mainParagraph} />

<TextComponent title="Bedrift? Meld din interesse!" bgColor="#79ABC8" /> */}
    <RegisterCompany />

    {/* <TextComponent
      title={purpose.title}
      text={purpose.text}
      bgColor="#79ABC8"
    /> */}
  </>
);

export default Main;
