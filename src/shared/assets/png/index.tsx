import type { FC } from "react";

import placeholder from "./placeholder.resource.png";

type PNGSelectorProps = {
  name: string;
  alt: string;
  styles?: string;
};

export const PNGSelector: FC<PNGSelectorProps> = ({ name, alt, styles }) => {
  switch (name) {
    default:
      return <img src={placeholder} className={styles} alt={alt} />;
  }
};
