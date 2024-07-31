import { useState, type FC } from "react";

import styles from "./styles.module.scss";

interface NumberInputProps {
  initial: number;
  classes?: string;
  updateValue: (newYear: number) => void;
}

export const NumberInput: FC<NumberInputProps> = ({
  initial,
  classes,
  updateValue,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState(initial);

  const focusInput = () => {
    setIsFocus(true);
  };

  const unFocusInput = () => {
    setIsFocus(false);
    updateValue(inputValue);
  };

  const onInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      unFocusInput();
    }
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.currentTarget.value));
  };

  return (
    <div
      className={`${styles.input} ${classes} ${isFocus && styles.input_focused}`}
      onClick={focusInput}
    >
      <input
        type="number"
        value={inputValue.toString()}
        className={`${styles.input__field} ${isFocus && styles.input__field_focused}`}
        autoFocus={isFocus}
        onChange={changeValue}
        onBlur={unFocusInput}
        onKeyDown={onInputEnter}
      />

      <span
        className={`${styles.input__years} ${isFocus && styles.input__years_focused}`}
      >
        {initial} {initial >= 2 ? "years" : "year"}
      </span>
    </div>
  );
};
