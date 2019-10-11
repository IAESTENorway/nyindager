import React from 'react';
import { Link } from "react-router-dom";
import EventBox from "../EventBox";
import style from './style.module.scss';

const dateToString = (dateString) => {
  const dateArray = dateString.split('-');
  const monthDateObj = new Date(dateString);

  const year = dateArray[0];
  const month = monthDateObj.toLocaleString('no-nb', { month: 'long' });
  const day = dateArray[2];

  return `${day  }. ${  month  } ${  year}`;
};
const EventsRow = (events) => (
  <div className={style.eventRows}>
    {events.length > 0
      ? events.map(event => {
        const { name, date } = event;

        return <Link className={style.EventBox} to={`/${name.toLowerCase()}`}>
          <EventBox
            eventTitle={name}
            stringDate={dateToString(date)}
            event={event}
          />
        </Link>;
      })
      : ""}
  </div>
);
export default EventsRow;
