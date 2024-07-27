import { useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Skill } from "entities";
import { Button, Icon, TextInput } from "shared";

interface SkillsProps {
  skills: Array<string>;
}

export const Skills: FC<SkillsProps> = ({ skills }) => {
  const [isInput, setIsInput] = useState(false);

  const setInput = () => {
    setIsInput(true);
  };

  return (
    <div className={styles.skills}>
      <ul className={styles.skills__list}>
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </ul>

      {!isInput && (
        <Button type="button" classes={styles.skills__add} onClick={setInput}>
          <Icon name="union" classes={styles.skills__icon} />
        </Button>
      )}

      {isInput && <TextInput initial="" classes={styles.skills__input} />}
    </div>
  );
};
