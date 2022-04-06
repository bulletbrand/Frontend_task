import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";
import { ButtonProps } from "./Button.types";

export const Button = ({ children, appearance = "dark", ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      {...props}
      className={cn(styles.button, {
        [styles.dark]: appearance === "dark",
      })}
    >
      {children}
    </button>
  );
};
