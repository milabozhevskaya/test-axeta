import type { FC } from "react";

import avatar from "./avatar.resource.png";
import flag from "./flag.resource.png";
import placeholder from "./placeholder.resource.png";

type PNGSelectorProps = {
  name: string;
  alt: string;
  styles?: string;
};

export const PNGSelector: FC<PNGSelectorProps> = ({ name, alt, styles }) => {
  switch (name) {
    case "avatar":
      return <img src={avatar} className={styles} alt={alt} />;
    case "flag":
      return <img src={flag} className={styles} alt={alt} />;
    default:
      return <img src={placeholder} className={styles} alt={alt} />;
  }
};
