import React, { FC } from "react";

interface IProps {
  name: string;
  date: string;
}

const EventBox: FC<IProps> = ({ name, date }) => (
  <div>
    <h1>{name}</h1>
    <p>{date}</p>
  </div>
);
export default EventBox;
