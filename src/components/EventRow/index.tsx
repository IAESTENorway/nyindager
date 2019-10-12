import React, { FC } from "react";
import { Link } from "react-router-dom";
import EventBox from "../EventBox";
import style from "./style.module.scss";

interface IProps {
  events: { name: string; date: string }[];
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
      ? events.map(event => {
          const { name, date } = event;

          return (
            <Link className={style.EventBox} to={`/${name.toLowerCase()}`}>
              <EventBox
                eventTitle={name}
                stringDate={dateToString(date)}
                event={event}
              />
            </Link>
          );
        })
      : ""}
  </div>
);
export default EventsRow;
