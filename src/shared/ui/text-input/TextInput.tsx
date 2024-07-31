import { useState, type FC } from "react";

import styles from "./styles.module.scss";

import { Button, Icon } from "shared";

interface TextInputProps {
  initial: string;
  classes?: string;
  validate?: (a: string) => boolean;
  saveValue: (val: string) => void;
  focused?: boolean;
  message: string;
  max?: number;
}

export const TextInput: FC<TextInputProps> = ({
  initial,
  classes,
  validate,
  saveValue,
  focused = false,
  message,
  max,
}) => {
  const [inputValue, setInputValue] = useState(initial);
  const [isFocus, setIsFocus] = useState(focused);
  const [isError, setIsError] = useState(false);

  const focusInput = () => {
    if (isFocus) {
      return;
    }

    setIsFocus(true);
  };

  const unFocusInput = () => {
    if (isError) {
      setIsError(false);
      setInputValue(initial);
    } else {
      saveValue(inputValue);
    }
    setIsFocus(false);
  };

  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isError) {
      e.currentTarget.blur();
      unFocusInput();
    }
  };

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validate && !validate(e.currentTarget.value)) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    setInputValue(e.currentTarget.value);
  };

  return (
    <div
      className={`${styles.input} ${classes} ${isError && styles.input_error} ${isFocus && styles.input_focused}`}
    >
      <input
        type="text"
        value={inputValue}
        className={styles.input__field}
        autoFocus={isFocus}
        onFocus={focusInput}
        onChange={changeInputValue}
        onKeyDown={onInputEnter}
        maxLength={max}
      />
      {isFocus && !isError && (
        <Button classes={styles.input__submit} onClick={unFocusInput}>
          <Icon name="check" classes={styles.input__icon} />
        </Button>
      )}
      {isError && (
        <Button classes={styles.input__reset} onClick={unFocusInput}>
          <Icon name="close" classes={styles.input__icon} />
        </Button>
      )}
      {isError && <span className={styles.input__message}>{message}</span>}
    </div>
  );
};
