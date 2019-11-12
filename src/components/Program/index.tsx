import { Pane } from "components/common";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

const text = `
# Work in progress 🏗

Heisann! Du ser ut til å ha kommet til en side som ikke har blitt implementert helt ennå 😱. Vi beklager dette, men den vil bli implementert så fort som mulig!

Kom tilbake Soon™️
`;

export const Program: FC = () => (
  <Pane>
    <ReactMarkdown source={text} />
  </Pane>
);
