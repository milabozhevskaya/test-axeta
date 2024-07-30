import styles from "./styles.module.scss";

import { Button, Icon } from "shared";

export const Print = () => (
  <div className={styles.print}>
    <Button type="button" classes={styles.print__button}>
      <Icon
        name="print"
        classes={styles.print__icon}
        svgClasses={styles.print__svg}
      ></Icon>
      <span>Print this page</span>
    </Button>
  </div>
);
