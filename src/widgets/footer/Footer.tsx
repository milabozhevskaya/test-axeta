import type { FC } from "react";

import styles from "./styles.module.scss";

import { Container, Logo } from "shared";

export const Footer: FC = () => (
  <Container classes={styles.container}>
    <Logo />
  </Container>
);
