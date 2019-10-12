import React from "react";
// import TextComponent from '../components/TextComponent';
import EventsRow from "../components/EventRow";
import Footer from "../components/Footer";
import FrontImage from "../components/FrontImage";
import Header from "../components/Header";
import RegisterCompany from "../components/RegisterCompany";
import { events, main /* purpose */ } from "../resources/data";

const urlBase = "http://pires.no";

const Main = () => (
  <>
    <Header />
    <main>
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
      <Footer />
    </main>
  </>
);

export default Main;
