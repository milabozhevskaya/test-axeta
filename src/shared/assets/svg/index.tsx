import type { FC } from "react";

import Check from "./check.source.svg";
import Close from "./close.source.svg";
import Logo from "./logo.source.svg";
import Print from "./print.source.svg";
import Quote from "./quote.source.svg";
import Reload from "./reload.source.svg";
import Union from "./union.source.svg";

type SVGSelectorProps = {
  name: string;
  styles?: string;
};

export const SVGSelector: FC<SVGSelectorProps> = ({ name, styles }) => {
  switch (name) {
    case "logo":
      return <Logo className={styles} />;
    case "check":
      return <Check className={styles} />;
    case "close":
      return <Close className={styles} />;
    case "union":
      return <Union className={styles} />;
    case "print":
      return <Print className={styles} />;
    case "reload":
      return <Reload className={styles} />;
    case "quote":
      return <Quote className={styles} />;
    default:
      return <svg className={styles}></svg>;
  }
};
