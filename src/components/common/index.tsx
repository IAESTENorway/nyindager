import React, { FC, HTMLAttributes } from "react";
import style from "./style.module.scss";

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  children?: JSX.Element;
}

export const Pane: FC = ({ children, ...props }) => (
  <div {...props} className={style.Pane}>
    {children}
  </div>
);
