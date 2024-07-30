import type { FC } from "react";

import styles from "./styles.module.scss";

import { Skills } from "features";
import { TextInput, Png } from "shared";

interface UserFormProps {
  name: string;
  location: string;
  language: string;
  skills: Array<string>;
}

export const UserForm: FC<UserFormProps> = ({
  name,
  location,
  language,
  skills,
}) => (
  <div className={styles.fields}>
    <TextInput initial={name} classes={styles.fields__name} />
    <TextInput initial={location} classes={styles.fields__location} />
    <div className={styles.fields__language}>
      <Png name="flag" alt="flag" classes={styles.fields__flag} />
      <span className={styles.fields__lang}>{language}</span>
    </div>
    <Skills skills={skills} />
  </div>
);
