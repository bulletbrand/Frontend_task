import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../../../components";
import { Input } from "../../../components/input/Input";
import styles from "./buyFlow.module.scss";
import { StepProps } from "./Buyflow.types";

export const EmailStep: FC<StepProps> = ({ nextStepCallback, nextStep }: StepProps): JSX.Element => {
  const methods = useFormContext();
  const email = methods.watch("email");

  const isButtonDisabled = (): boolean => !email || !!Object.entries(methods.formState.errors)?.length;

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
      <Button disabled={isButtonDisabled()} type="button" onClick={() => nextStepCallback(nextStep)}>
        Next
      </Button>
    </>
  );
};
