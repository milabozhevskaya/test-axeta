import styles from "./styles.module.scss";

import { Avatar, UserForm } from "features";

const user = {
  name: "John Doe",
  location: "123 Main St, Anytown USA",
  avatar: "https://example.com/avatar.jpg",
  language: "English",
  skills: ["JavaScript", "React", "Node.js"],
};

export const Profile = () => (
  <div className={styles.profile}>
    <div className={styles.profile__avatar}>
      <Avatar srcImage={user.avatar} />
    </div>
    <div className={styles.profile__info}>
      <UserForm {...user} />
    </div>
  </div>
);
