import { useState, type FC } from "react";

import styles from "./styles.module.scss";

interface NumberInputProps {
  initial: number;
  classes?: string;
}

export const NumberInput: FC<NumberInputProps> = ({ initial, classes }) => {
  const [focus, setFocus] = useState(false);

  const focusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
    setFocus(true);
  };

  return (
    <div className={`${styles.input} ${classes} ${focus && styles.focus}`}>
      <input
        type="number"
        defaultValue={initial}
        className={styles.input__field}
        onFocus={focusInput}
      />
      {!focus && (
        <span className={styles.input__years}>
          {initial >= 2 ? "years" : "year"}
        </span>
      )}
    </div>
  );
};
