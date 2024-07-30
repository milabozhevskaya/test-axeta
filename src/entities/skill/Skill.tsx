import { useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Button, Icon } from "shared";

interface SkillProps {
  skill: string;
}

export const Skill: FC<SkillProps> = ({ skill }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={styles.skill}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        type="button"
        classes={`${styles.skill__button} ${isHover && styles.skill__button_hover}`}
      >
        <span>{skill}</span>
      </Button>

      {isHover && (
        <Button type="button" classes={styles.skill__reset}>
          <Icon name="close" classes={styles.skill__icon} />
        </Button>
      )}
    </div>
  );
};
