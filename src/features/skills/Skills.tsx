import { type PropsWithChildren, useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Skill } from "entities";
import {
  Button,
  Icon,
  MIN_LENGTH_MESSAGE,
  TextInput,
  useAppDispatch,
  useAppSelector,
  validateSkillInput,
} from "shared";
import { setExperience, type RootState } from "store";

export const Skills: FC<PropsWithChildren> = () => {
  const [isInput, setIsInput] = useState(false);
  const { experience } = useAppSelector((state: RootState) => state.userSlice);
  const dispatch = useAppDispatch();

  const updateExperience = (newExperience: string) => {
    setIsInput(false);

    if (newExperience.length === 0) {
      return;
    }

    if (experience.filter((skill) => skill.name === newExperience).length > 0) {
      return;
    }

    dispatch(setExperience([...experience, { name: newExperience, year: 0 }]));
  };

  const removeExperience = (name: string) => {
    const updatedExperience = experience.filter((skill) => skill.name !== name);
    dispatch(setExperience(updatedExperience));
  };

  const setInput = () => {
    setIsInput(true);
  };

  return (
    <div className={styles.skills}>
      {experience.map((skill) => (
        <Skill
          key={skill.name}
          skill={skill.name}
          onRemove={removeExperience}
        />
      ))}

      {!isInput && (
        <Button type="button" classes={styles.skills__add} onClick={setInput}>
          <Icon name="union" classes={styles.skills__plus} />
        </Button>
      )}

      {isInput && (
        <TextInput
          initial=""
          focused={true}
          classes={styles.skills__input}
          saveValue={updateExperience}
          validate={validateSkillInput}
          message={MIN_LENGTH_MESSAGE}
          max={18}
        />
      )}
    </div>
  );
};
