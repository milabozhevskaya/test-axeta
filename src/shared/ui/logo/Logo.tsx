import { Icon } from "../icon/Icon";

import styles from "./styles.module.scss";

export const Logo = () => (
  <div className={styles.logo}>
    <Icon name="logo" classes={styles.logo__icon} />
  </div>
);
