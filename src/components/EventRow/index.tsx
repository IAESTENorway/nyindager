import React, { FC } from "react";
import { Link } from "react-router-dom";
import EventBox from "../EventBox";
import style from "./style.module.scss";

interface IProps {
  events: Array<{ name: string; date: string }>;
}

export const dateToString = (dateString: string) => {
  const dateArray = dateString.split("-");
  const monthDateObj = new Date(dateString);

  const year = dateArray[0];
  const month = monthDateObj.toLocaleString("no-nb", { month: "long" });
  const day = dateArray[2];

  return `${day}. ${month} ${year}`;
};
const EventsRow: FC<IProps> = ({ events }) => (
  <div className={style.eventRows}>
    {events.length
      ? events.map(event => (
          <Link
            key={event.name}
            className={style.EventBox}
            to={`/${event.name.toLowerCase()}`}
          >
            <EventBox {...event} />
          </Link>
        ))
      : ""}
  </div>
);

export default EventsRow;
