import styles from "./styles.module.scss";

import { Button, Icon } from "shared";

export const Print = () => (
  <Button type="button" classes={styles.print__button}>
    <Icon name="print" classes={styles.print__icon}></Icon>
    <span>Print this page</span>
  </Button>
);
