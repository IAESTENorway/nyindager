import in_front from "img/in_front.jpg";
import React, { FC } from "react";
import { dateToString } from "../components/Events/EventsRow";
import FrontImage from "../components/FrontImage";
import { events } from "../resources/data";
interface IProps {
  eventName: string;
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
      eventHolder: "Mer info kommer"
    }
  ]
};

const Event: FC<IProps> = ({ eventName }) => {
  const { name, date, program, description } =
    events.find(e => e.name === eventName) || defaultEvent;

  return (
    <div className="Event fade-in">
      <FrontImage
        image={in_front}
        title={`IAESTEs Næringslivsdager i ${name}`}
        undertitle={dateToString(date)}
      />
      <p>{description}</p>
      <h1>Program</h1>
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
    </div>
  );
};

export default Event;
