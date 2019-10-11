/**
 * Created by moled on 14.04.2018.
 */
import React from 'react';
import FrontImage from '../components/FrontImage';
import Header from '../components/Header';
import TextComponent from '../components/TextComponent';
import EventsRow from '../components/EventRow';
import RegisterCompany from '../components/RegisterCompany';
import Footer from '../components/Footer';
import { main, events, purpose } from '../resources/data.ts';

const urlBase = 'http://pires.no';

const Main = () => (
<>
  <Header />
  <main>
    <FrontImage
      className="fade-in"
      imgUrl={urlBase + main.frontImg}
      title={main.frontTitle}
    />
    <EventsRow events={events} />
    <TextComponent title={main.mainTitle} text={main.mainParagraph} />

    <TextComponent title="Bedrift? Meld din interesse!" bgColor="#79ABC8" />
    <RegisterCompany />

    <TextComponent
      title={purpose.title}
      text={purpose.text}
      bgColor="#79ABC8"
    />
    <Footer />
  </main>
</>
);

export default Main;
