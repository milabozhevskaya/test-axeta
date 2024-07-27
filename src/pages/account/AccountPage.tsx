import styles from "./styles.module.scss";

import { Print } from "features";
import { Section } from "shared";
import { Profile, Resume } from "widgets";

export const AccountPage = () => (
  <>
    <Section
      id="head"
      classes={styles.head}
      containerClasses={styles.head__container}
    >
      <Profile />
      <Print />
    </Section>

    <Section
      id="details"
      classes={styles.details}
      containerClasses={styles.details__container}
    >
      <Resume />
    </Section>
  </>
);
