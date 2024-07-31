import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

import { Skills } from "features";
import { useAppSelector, useAppDispatch } from "hooks";
import {
  validateLocationInput,
  TextInput,
  Png,
  validateNameInput,
  ERROR_MESSAGE,
} from "shared";
import { type RootState, setLocation, setName } from "store";

export const UserForm: FC<PropsWithChildren> = () => {
  const { name, location, language } = useAppSelector(
    (state: RootState) => state.userSlice
  );
  const dispatch = useAppDispatch();

  const setNameValue = (nameValue: string) => {
    dispatch(setName(nameValue));
  };

  const setLocationValue = (nameValue: string) => {
    dispatch(setLocation(nameValue));
  };

  return (
    <div className={styles.fields}>
      <TextInput
        initial={name}
        classes={styles.fields__name}
        validate={validateNameInput}
        saveValue={setNameValue}
        message={ERROR_MESSAGE}
        max={15}
      />
      <TextInput
        initial={location}
        classes={styles.fields__location}
        validate={validateLocationInput}
        saveValue={setLocationValue}
        message={ERROR_MESSAGE}
        max={40}
      />
      <div className={styles.fields__language}>
        <Png name="flag" alt="flag" classes={styles.fields__flag} />
        <span className={styles.fields__lang}>{language}</span>
      </div>
      <Skills />
    </div>
  );
};
