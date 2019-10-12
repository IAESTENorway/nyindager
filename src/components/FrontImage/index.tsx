import frontLogo from "img/in_logo_medium.png";
import React, { FC } from "react";

interface IProps {
  image: string;
  title: string;
  className?: string;
  undertitle?: string;
}

const FrontImage: FC<IProps> = ({ image, title, undertitle, className }) => (
  <div
    style={{ backgroundImage: `url(${image})` }}
    className={`front-img ${className}`}
  >
    <img src={frontLogo} alt="" />
    <h1 className="front-img-title">{title}</h1>
    {undertitle && <h3>{undertitle}</h3>}
  </div>
);

export default FrontImage;
