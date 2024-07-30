import { useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Button, Icon } from "shared";

interface TextInputProps {
  initial: string;
  classes?: string;
  focused?: boolean;
}

export const TextInput: FC<TextInputProps> = ({
  initial,
  classes,
  focused = false,
}) => {
  const [isFocus, setIsFocus] = useState(focused);
  const [isError] = useState(false);

  const focusInput = () => {
    setIsFocus(true);
  };

  const unFocusInput = () => {
    setIsFocus(false);
  };

  return (
    <div
      className={`${styles.input} ${classes} ${isError && styles.input_error} ${isFocus && styles.input_focused}`}
    >
      <input
        type="text"
        defaultValue={initial}
        className={styles.input__field}
        autoFocus={focused}
        onFocus={focusInput}
        onBlur={unFocusInput}
      />
      {isFocus && !isError && (
        <Button classes={styles.input__submit}>
          <Icon name="check" classes={styles.input__icon} />
        </Button>
      )}
      {isError && (
        <Button classes={styles.input__reset}>
          <Icon name="close" classes={styles.input__icon} />
        </Button>
      )}
      {isError && (
        <span className={styles.input__message}>Error Description</span>
      )}
    </div>
  );
};
