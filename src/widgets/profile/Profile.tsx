import styles from "./styles.module.scss";

import { Avatar, UserForm } from "features";

export const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.profile__avatar}>
      <Avatar />
    </div>
    <div className={styles.profile__info}>
      <UserForm />
    </div>
  </div>
);
