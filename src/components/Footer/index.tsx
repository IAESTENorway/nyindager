import iaesteLogo from "img/iaeste_small_orange.png";
import KarriereStart from "img/karrierestart.png";
import NTNU from "img/logo_ntnu_u-slagord_neg.png";
import React, { FC } from "react";
import styles from "./style.module.scss";

const sponsors = [
  {
    name: "NTNU",
    logo: NTNU,
    webUrl: "https://ntnu.no"
  },
  {
    name: "KarriereStart",
    logo: KarriereStart,
    webUrl: "https://karrierestart.no"
  }
];

const Footer: FC = () => (
  <footer>
    <a href="https://iaeste.no" className={styles.iaesteInfo}>
      <img src={iaesteLogo} alt="Logo" />
    </a>
    <div className={styles.partnersContainer}>
      <p>Våre samarbeidspartnere</p>
      <div>
        {sponsors.map(s => (
          <a key={s.name} className={styles.partnerItem} href={s.webUrl}>
            <img src={s.logo} alt={`${s.name}`} />
          </a>
        ))}
      </div>
    </div>
    <a href="https://iaeste.no" className={styles.iaesteInfo}>
      <p>IAESTE Norge</p>
    </a>
  </footer>
);

export default Footer;
