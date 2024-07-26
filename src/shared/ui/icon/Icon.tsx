import type { FC } from "react";

import styles from "./styles.module.scss";

import { SVGSelector } from "assets";

interface IconProps {
  name: string;
  classes?: string;
}

export const Icon: FC<IconProps> = ({ name, classes }) => (
  <span className={`${styles.icon} ${classes}`}>
    <SVGSelector name={name} styles={styles.icon__svg} />
  </span>
);
