import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

interface ContainerProps extends PropsWithChildren {
  classes?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  classes,
  ...rest
}) => (
  <div className={`${styles.container} ${classes}`} {...rest}>
    {children}
  </div>
);
