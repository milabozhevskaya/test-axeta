import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

import { Subtitle } from "shared";

interface ColumnProps extends PropsWithChildren {
  classes: string;
  title?: string;
}

export const Columnn: FC<ColumnProps> = ({ classes, title, children }) => (
  <div key={classes} className={`${styles.column} ${classes}`}>
    <Subtitle classes={styles.column__subtitle}>{title}</Subtitle>

    {children}
  </div>
);
