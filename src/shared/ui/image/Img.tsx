import type { FC } from "react";

import styles from "./styles.module.scss";

import { PNGSelector } from "assets";

interface PngProps {
  name: string;
  alt: string;
  classes?: string;
  imgClasses?: string;
}

export const Png: FC<PngProps> = ({ name, alt, classes, imgClasses }) => (
  <div className={`${styles.image} ${classes}`}>
    <PNGSelector
      name={name}
      alt={alt}
      styles={`${styles.image__pic} ${imgClasses}`}
    />
  </div>
);
