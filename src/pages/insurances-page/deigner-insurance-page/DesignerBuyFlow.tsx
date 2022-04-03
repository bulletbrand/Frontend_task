import React, { FC } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object, number } from "yup";
import { RouteComponentProps } from "react-router-dom";
import { NamesStep, AgeStep, EmailStep, DesignerSummaryStep } from "../buyflow";
import { Tag, Container } from "../../../components";
import { IDesignerForm, ProductIds } from "../buyflow/Buyflow.types";
import { PRODUCT_IDS_TO_NAMES } from "../../../constants/constants";
import styles from "../buyflow/buyFlow.module.scss";
import {
  AGE_REQUIRED_MESSAGE,
  EMAIL_INVALID_MESSAGE,
  EMAIL_REQUIRED_MESSAGE,
  FIRST_NAME_REQUIRED_MESSAGE,
  LAST_NAME_REQUIRED_MESSAGE,
} from "../../../constants/messages";
import { usePersistedState } from "../../../hooks/usePersistedState";
import { useClearLocalStorage } from "../../../hooks/useClearLocalStorage";

const formState: IDesignerForm = {
  email: "",
  age: 0,
  firstName: "",
  lastName: "",
};

const FIRST_STEP = "email";
const LAST_STEP = "summary";

const designerFormSchema = object({
  email: string().email(EMAIL_INVALID_MESSAGE).required(EMAIL_REQUIRED_MESSAGE).max(80),
  age: number()
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .nullable()
    .required(AGE_REQUIRED_MESSAGE)
    .positive()
    .max(125),
  firstName: string().required(FIRST_NAME_REQUIRED_MESSAGE).max(60),
  lastName: string().required(LAST_NAME_REQUIRED_MESSAGE).max(60),
});

interface MatchParams {
  productId: ProductIds;
}

type Props = RouteComponentProps<MatchParams>;

export const DesignerBuyFlow: FC<Props> = ({ match }: Props): JSX.Element => {
  const [currentStep, setStep] = usePersistedState<string>("currentStep", FIRST_STEP);
  const [collectedData, setCollectedData] = usePersistedState<IDesignerForm>("collectedData", formState);
  useClearLocalStorage(["collectedData", "currentStep"]); // clear local storage when component unmount
  const { productId } = match.params;

  const methods = useForm<IDesignerForm>({
    defaultValues: collectedData,
    mode: "onChange",
    resolver: yupResolver(designerFormSchema),
  });

  const onSubmit = (data: IDesignerForm) => {
    setCollectedData(data);
  };

  const getStepDesignerCallback = async (nextStep: string) => {
    if (nextStep === LAST_STEP) {
      await methods.handleSubmit(onSubmit)();
    } else {
      const fields = methods.getValues();
      setCollectedData(fields);
    }
    setStep(nextStep);
  };

  const getStepsDisplay = () => {
    return (
      (currentStep === "email" && <EmailStep nextStep="age" nextStepCallback={getStepDesignerCallback} />) ||
      (currentStep === "age" && <AgeStep nextStep="names" nextStepCallback={getStepDesignerCallback} />) ||
      (currentStep === "names" && <NamesStep nextStep="summary" nextStepCallback={getStepDesignerCallback} />) ||
      (currentStep === "summary" && <DesignerSummaryStep collectedData={collectedData} />)
    );
  };

  return (
    <div>
      <Tag tag="h2">Buying {PRODUCT_IDS_TO_NAMES[productId]}</Tag>
      <Container>
        <div className={styles.buyFlowFormWrapper}>
          <FormProvider {...methods}>
            <form className={styles.buyFlowForm}>{getStepsDisplay()}</form>
          </FormProvider>
        </div>
      </Container>
    </div>
  );
};
