import type { FC, PropsWithChildren } from "react";

import { Container } from "../container/Container";

import styles from "./styles.module.scss";

interface SectionProps extends PropsWithChildren {
  id?: string;
  classes?: string;
  containerClasses?: string;
}

export const Section: FC<SectionProps> = ({
  children,
  id,
  classes,
  containerClasses,
}) => (
  <section id={id} className={`${styles.section} ${classes}`}>
    <Container classes={containerClasses}>{children}</Container>
  </section>
);
