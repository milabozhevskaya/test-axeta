import { useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Button, Icon } from "shared";

interface TextInputProps {
  initial: string;
  classes?: string;
}

export const TextInput: FC<TextInputProps> = ({ initial, classes }) => {
  const [focus, setFocus] = useState(false);
  const [isError] = useState(false);

  const focusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
    setFocus(true);
  };

  return (
    <div className={`${styles.input} ${classes} ${isError && styles.error}`}>
      <input
        type="text"
        defaultValue={initial}
        className={styles.input__field}
        onFocus={focusInput}
      />
      {focus && (
        <Button classes={styles.input__submit}>
          <Icon name="check" />
        </Button>
      )}
      {isError && (
        <Button classes={styles.input__reset}>
          <Icon name="close" />
        </Button>
      )}
      {isError && (
        <span className={styles.error__message}>Error Description</span>
      )}
    </div>
  );
};
