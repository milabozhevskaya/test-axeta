import { useState, type FC } from "react";

import styles from "./styles.module.scss";

interface NumberInputProps {
  initial: number;
  classes?: string;
}

export const NumberInput: FC<NumberInputProps> = ({ initial, classes }) => {
  const [isFocus, setIsFocus] = useState(false);

  const focusInput = () => {
    console.log("focus");
    setIsFocus(true);
  };

  const unFocusInput = () => {
    setIsFocus(false);
  };

  return (
    <div
      className={`${styles.input} ${classes} ${isFocus && styles.input_focused}`}
      onClick={focusInput}
    >
      <input
        type="number"
        defaultValue={initial}
        className={`${styles.input__field} ${isFocus && styles.input__field_focused}`}
        autoFocus={isFocus}
        onBlur={unFocusInput}
      />
      <span
        className={`${styles.input__years} ${isFocus && styles.input__years_focused}`}
      >
        {initial} {initial >= 2 ? "years" : "year"}
      </span>
    </div>
  );
};
