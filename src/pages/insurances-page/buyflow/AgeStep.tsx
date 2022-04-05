import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../components/input/Input";
import { Button } from "../../../components";
import styles from "./buyFlow.module.scss";
import { StepProps } from "./Buyflow.types";

export const AgeStep: FC<StepProps> = ({ nextStepCallback, nextStep }: StepProps): JSX.Element => {
  const methods = useFormContext();

  return (
    <>
      <div className={styles.formStepItem}>
        <Input
          type="number"
          {...methods.register("age")}
          error={methods.formState.errors.age}
          aria-invalid={!!methods.formState.errors.age}
          placeholder="Age"
          isRequired
          label="Age:"
        />
      </div>
      <Button type="button" onClick={() => nextStepCallback(nextStep, ["age"])}>
        Next
      </Button>
    </>
  );
};
