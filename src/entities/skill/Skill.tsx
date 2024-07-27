import type { FC } from "react";

import styles from "./styles.module.scss";

import { Button, Icon } from "shared";

interface SkillProps {
  skill: string;
}

export const Skill: FC<SkillProps> = ({ skill }) => (
  <div className={styles.skill}>
    <Button type="button" classes={styles.skill__button}>
      {skill}
    </Button>
    <Button type="button" classes={styles.skill__reset}>
      <Icon name="reset" classes={styles.skill__icon} />
    </Button>
  </div>
);
