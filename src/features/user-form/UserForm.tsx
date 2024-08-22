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
import { type RootState, setAddress, setName } from "store";

export const UserForm: FC<PropsWithChildren> = () => {
  const { name, address, language, loading, error } = useAppSelector(
    (state: RootState) => state.userSlice
  );
  const dispatch = useAppDispatch();

  const setNameValue = (nameValue: string) => {
    dispatch(setName(nameValue));
  };

  const setLocationValue = (nameValue: string) => {
    dispatch(setAddress(nameValue));
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
        initial={address}
        classes={styles.fields__location}
        validate={validateLocationInput}
        saveValue={setLocationValue}
        message={ERROR_MESSAGE}
        max={40}
        loading={loading}
        error={error}
      />
      <div className={styles.fields__language}>
        <Png name="flag" alt="flag" classes={styles.fields__flag} />
        <span className={styles.fields__lang}>{language}</span>
      </div>
      <Skills />
    </div>
  );
};
