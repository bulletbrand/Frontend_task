import React, { ForwardedRef, forwardRef } from "react";
import cn from "classnames";
import styles from "./input.module.scss";
import { InputProps } from "./Input.types";

export const Input = forwardRef(
  ({ className, error, label, isRequired, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
      <div
        className={cn(className, styles.inputWrapper, {
          [styles.isRequired]: isRequired,
        })}
      >
        {label ? (
          <label className={styles.label} htmlFor={props.name}>
            {label}
          </label>
        ) : null}
        <input className={cn(styles.input, { [styles.error]: error })} ref={ref} {...props} id={props.name} />
        {error && (
          <span role="alert" className={styles.errorMessage}>
            {error.message}
          </span>
        )}
      </div>
    );
  }
);
