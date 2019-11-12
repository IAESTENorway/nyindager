import img_main from "img/in_front.jpg";
import React, { FC } from "react";
import { Cities } from "routes/types";
import { capitalizeFirstLetter } from "routes/utils";
import EventsRow from "../components/Events/EventsRow";
import FrontImage from "../components/FrontImage";
import RegisterCompany from "../components/RegisterCompany";
import { events, main, purpose } from "../resources/data";
import style from "./style.module.scss";

const Main: FC<Cities> = ({ city }) => {
  const titleLoc =
    city && city !== "national" ? ` i ${capitalizeFirstLetter(city)}` : "";
  const title = (main.frontTitle as string) + "" + titleLoc;
  return (
    <>
      <FrontImage className="fade-in" image={img_main} title={title} />
      <EventsRow events={events} />
      <div className={style.textblock}>
        <h1>{main.mainTitle}</h1>
        <p>{main.mainParagraph}</p>
      </div>
      <div className={style.textblock}>
        <h1>Bedrift? Meld din interesse!</h1>
      </div>
      <RegisterCompany />

      <div className={style.textblock}>
        <h1>{purpose.title}</h1>
        <p>{purpose.text}</p>
      </div>
    </>
  );
};

export default Main;
