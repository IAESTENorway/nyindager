import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

interface IProps {
  name: string;
  date: string;
}

const EventBox: FC<IProps> = ({ name, date }) => (
  <Link key={name} className={style.eventBox} to={`/${name.toLowerCase()}`}>
    <h1>{name}</h1>
    <p>
      <time>{date}</time>
    </p>
  </Link>
);
export default EventBox;
