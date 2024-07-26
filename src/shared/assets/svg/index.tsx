import type { FC } from "react";

import Logo from "./logo.source.svg";

type SVGSelectorProps = {
  name: string;
  styles?: string;
};

export const SVGSelector: FC<SVGSelectorProps> = ({ name, styles }) => {
  switch (name) {
    case "logo":
      return <Logo className={styles} />;
    default:
      return <svg className={styles}></svg>;
  }
};
