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
  <>
    <TextInput initial={name} classes={styles.name} />
    <TextInput initial={location} classes={styles.location} />
    <div className={styles.language}>
      <Png name="flag" alt="flag" classes={styles.language__icon} />
      <span>{language}</span>
    </div>
    <Skills skills={skills} />
  </>
);
