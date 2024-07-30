import type { FC } from "react";

import styles from "./styles.module.scss";

import { SVGSelector } from "assets";

interface IconProps {
  name: string;
  classes?: string;
  svgClasses?: string;
}

export const Icon: FC<IconProps> = ({ name, classes, svgClasses }) => (
  <span className={`${styles.icon} ${classes}`}>
    <SVGSelector name={name} styles={`${styles.icon__svg} ${svgClasses}`} />
  </span>
);
