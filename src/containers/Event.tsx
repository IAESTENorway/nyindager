import React, { FC, useState } from "react";
import FrontImage from "../components/FrontImage";
import Header from "../components/Header";
import RegisterCompany from "../components/RegisterCompany";
import Footer from "../components/Footer";
import { events } from "../resources/data";
import { dateToString } from "../components/EventRow";

/*eventName: props.match.params.event,
      event: [],
      isLoading: true,*/

interface IProps {
  eventName: String;
}

const defaultEvent = {
  name: "Trondheim",
  date: "2020-02-06",
  description:
    "Torsdag 6. februar 2020 arrangeres IAESTEs Næringslivsdager ved NTNU Trondheim. Arrangementet finner sted på PlaceholderLocation1.",
  imgUrl: "/img/in_front.jpg",
  program: [
    {
      timeString: "--:--",
      description: "Mer info kommer",
      eventHolder: "Mer info kommer",
    },
  ],
};

const Event: FC<IProps> = ({ eventName }) => {
  const isLoading = useState(false);

  const urlBase = "http://pires.no";

  const { name, date, imgUrl, program } =
    events.find(e => e.name === eventName) || defaultEvent;

  return !isLoading ? (
    <div className="Event fade-in">
      <Header />
      <FrontImage
        image={urlBase + imgUrl}
        title={`IAESTEs Næringslivsdager i ${name}`}
        undertitle={dateToString(date)}
      />
      {/* <TextComponent title="" text={description} />
        <TextComponent title="Program" text="" bgColor="#223847" /> */}
      <div className="program-container">
        {program.length
          ? program.map(programEvent => {
              const { timeString, description, eventHolder } = programEvent;
              return () => (
                <div className="program-item">
                  <h4>{timeString} </h4> <h5>{description}</h5>{" "}
                  <h6>{eventHolder}</h6>
                </div>
              );
            })
          : ""}
      </div>

      <RegisterCompany />
      <Footer />
    </div>
  ) : (
    <>"LOADING"</>
  );
};

export default Event;
