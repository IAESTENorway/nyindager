import React, { FC } from "react";
import EventBox from "./EventBox";
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
  <div className={style.eventsRow}>
    {events.length
      ? events.map(event => <EventBox key={event.name} {...event} />)
      : ""}
  </div>
);

export default EventsRow;
