import React, { FC, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object, number } from "yup";
import { RouteComponentProps } from "react-router-dom";
import { AgeStep, EmailStep, DeveloperSummaryStep } from "../buyflow";
import { Tag, Container, Spinner } from "../../../components";
import { ProductIds, IDeveloperForm } from "../buyflow/Buyflow.types";
import { PRODUCT_IDS_TO_NAMES } from "../../../constants/constants";
import styles from "../buyflow/buyFlow.module.scss";
import { AGE_REQUIRED_MESSAGE, EMAIL_INVALID_MESSAGE, EMAIL_REQUIRED_MESSAGE } from "../../../constants/messages";
import { usePersistedState } from "../../../hooks/usePersistedState";
import { useClearLocalStorage } from "../../../hooks/useClearLocalStorage";
import { sleep } from "../../../utils/helpers";

const formState: IDeveloperForm = {
  email: "",
  age: 0,
};

const FIRST_STEP = "email";
const LAST_STEP = "summary";

interface MatchParams {
  productId: ProductIds;
}

type Props = RouteComponentProps<MatchParams>;

const developerFormSchema = object({
  email: string().email(EMAIL_INVALID_MESSAGE).required(EMAIL_REQUIRED_MESSAGE).max(80),
  age: number()
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .nullable()
    .required(AGE_REQUIRED_MESSAGE)
    .positive()
    .max(125),
});

export const DeveloperBuyFlow: FC<Props> = ({ match }: Props): JSX.Element => {
  const [currentStep, setStep] = usePersistedState<string>("currentStep", FIRST_STEP);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [collectedData, setCollectedData] = usePersistedState<IDeveloperForm>("collectedData", formState);
  useClearLocalStorage(["collectedData", "currentStep"]); // clear local storage when component unmount
  const { productId } = match.params;

  const methods = useForm<IDeveloperForm>({
    defaultValues: collectedData,
    mode: "onChange",
    resolver: yupResolver(developerFormSchema),
  });

  const onSubmit = (data: IDeveloperForm) => {
    setCollectedData(data);
  };

  const getStepDeveloperCallback = async (nextStep: string) => {
    setLoading(true);
    await sleep(700); // imitate some loading action
    if (nextStep === LAST_STEP) {
      await methods.handleSubmit(onSubmit)();
    } else {
      const fields = methods.getValues();
      setCollectedData(fields);
    }
    setLoading(false);
    setStep(nextStep);
  };

  const getStepsDisplay = () => {
    return (
      (currentStep === "email" && <EmailStep nextStep="age" nextStepCallback={getStepDeveloperCallback} />) ||
      (currentStep === "age" && <AgeStep nextStep="summary" nextStepCallback={getStepDeveloperCallback} />) ||
      (currentStep === "summary" && <DeveloperSummaryStep collectedData={collectedData} />)
    );
  };

  return (
    <div>
      <Tag tag="h2">Buying {PRODUCT_IDS_TO_NAMES[productId]}</Tag>
      <Container>
        <div className={styles.buyFlowFormWrapper}>
          <FormProvider {...methods}>
            {!isLoading ? (
              <form className={styles.buyFlowForm}>{getStepsDisplay()}</form>
            ) : (
              <Spinner loading={isLoading} />
            )}
          </FormProvider>
        </div>
      </Container>
    </div>
  );
};
