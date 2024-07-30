import type { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

interface ButtonProps extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  classes?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  type,
  classes,
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
}) => (
  <button
    className={`${styles.button} ${classes}`}
    type={type}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    disabled={disabled}
  >
    {children}
  </button>
);
