import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../../components";
import { Input } from "../../../components/input/Input";
import styles from "./buyFlow.module.scss";
import { StepProps } from "./Buyflow.types";

export const EmailStep: FC<StepProps> = ({ nextStepCallback }: StepProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <>
      <div className={styles.formStepItem}>
        <Input
          {...methods.register("email")}
          error={methods.formState.errors.email}
          aria-invalid={!!methods.formState.errors.email}
          placeholder="Email"
          isRequired
          label="Email:"
          type="email"
        />
      </div>
      <Button type="button" onClick={() => nextStepCallback(["email"])}>
        Next
      </Button>
    </>
  );
};
