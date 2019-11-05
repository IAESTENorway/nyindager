import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Cities } from "routes/types";
import styles from "./style.module.scss";

const text = {
  national: `
# Om oss
IAESTEs Næringslivsdager (IN) er et rekrutterings- og profileringsarrangement rettet mot teknologi-, realfags- og økonomistudenter. I 2020 arrangeres IN i Trondheim, Stavanger og Oslo. IN ble for første gang arrangert på NTH (NTNU) i 1990 og regnes derfor for Norges første og eldste karrieredag for studenter. Målet med IAESTEs næringslivsdager er å knytte kontakt mellom studenter og næringslivet, samt å skaffe en inntekt som kan finansiere IAESTEs hovedvirksomhet, som er utveksling for studenter med tanke på sommerjobb i utlandet. For oss er det viktig å arrangere karrieredager med høy standard hvor bedrifter kan komme i kontakt med de studentene de leter etter! 

IAESTEs Næringslivsdager arrangeres av medlemmer i studentorganisasjonen IAESTE. Dette er en nonprofit organisasjon drevet av frivillige studenter og to ansatte ved nasjonalkontoret i Trondheim i samarbeid med NTNU. IAESTE er representert ved universitetene i Bergen, Grimstad, Oslo, Stavanger, Trondheim, Tromsø og Ås. 

Kontakt oss: [prk@iaeste.no](mailto:prk@iaeste.no)
`,
  trondheim: `
# Om oss
Den første av IAESTEs næringslivsdager ble arrangert ved NTH (NTNU) i 1990. IAESTE Trondheim har siden den gang arrangert IN Trondheim hvert eneste år. Det første IN hadde 11 deltakende bedrifter og ble en stor suksess. I 1998 utvidet man for første gang arrangementet til to dager. Arrangementet ble utvidet til tre dager i 2008, men i 2015 ble det igjen satt til en dag.  
I år arrangeres IN den 06. februar 2020 på NTNU Gløshaugen. Målet med IAESTEs næringslivsdager er å knytte kontakt mellom studenter og næringslivet, samt å skaffe en inntekt som kan finansiere IAESTEs hovedvirksomhet, som er utveksling for studenter med tanke på sommerjobb i utlandet.  

Gruppebilde!!!!

Nederst på siden: 
Kontakt oss: 
NTNU, Trondheim Norway
[+47 454 949 18](tel:+4745494918)
[introndheim@iaeste.no](mailto:introndheim@iaeste.no)
`,
  oslo: ``,
  stavanger: ``,
};

export const About: FC<Cities> = ({ city }) => {
  return (
    <div className={styles.Pane}>
      <ReactMarkdown source={text[city ? city : "national"]} />
    </div>
  );
};
