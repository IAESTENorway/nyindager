/**
 * Created by moled on 14.04.2018.
 */
import React from "react";
import iaesteLogo from "../../img/iaeste_small_orange.png";
import NTNU from './logo_ntnu_u-slagord_neg.png';
import KarriereStart from './karrierestart.png';

const sponsors = [{
  name: "NTNU",
  logo: NTNU,
  webUrl: "https://ntnu.no"
},
{
  name: "KarriereStart",
  logo: KarriereStart,
  webUrl: "https://karrierestart.no"
}];

const Footer = () =>
  <footer>
    <p> Våre samarbeidspartnere </p>
    <div className="sponsors-container">
      {sponsors.map(s => <a key={s.name} className="partner-item" href={s.webUrl}>
        <img src={s.logo} />
      </a>)}
    </div>
    <a href="https://iaeste.no" className="iaeste-info ">
      <img src={iaesteLogo} />
      <p>IAESTE Norge</p>
    </a>
  </footer>;

export default Footer;
