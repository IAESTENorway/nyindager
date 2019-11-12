import { Pane } from "components/common";
import { WIPText } from "components/common/utils";
import React, { FC } from "react";
import ReactMarkdown from "react-markdown";

export const Program: FC = () => (
  <Pane>
    <ReactMarkdown source={WIPText} />
  </Pane>
);
