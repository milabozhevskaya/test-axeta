import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

interface SubtitleProps extends PropsWithChildren {
  classes?: string;
}

export const Subtitle: FC<SubtitleProps> = ({ children, classes }) => (
  <h2 className={`${styles.subtitle} ${classes}`}>{children}</h2>
);
