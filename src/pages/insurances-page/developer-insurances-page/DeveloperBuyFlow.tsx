import React, { FC } from "react";
import { object } from "yup";
import { RouteComponentProps } from "react-router-dom";
import { IDeveloperForm, ProductIds } from "../buyflow/Buyflow.types";
import { AgeStep, EmailStep } from "../buyflow";
import { BuyFlow } from "../buyflow/BuyFlow";
import { routes } from "../../../routes/routes";
import { ageValidate, emailValidate } from "../buyflow/buyflow-validation-rules/buyflowValidationRules";

const formState: IDeveloperForm = {
  email: "",
  age: 0,
};

const developerFormSchema = object({
  email: emailValidate("Email"),
  age: ageValidate("Age"),
});

interface MatchParams {
  productId: ProductIds;
}

type Props = RouteComponentProps<MatchParams>;

export const DeveloperBuyFlow: FC<Props> = ({ match }: Props): JSX.Element => {
  const { productId } = match.params;

  const steps = [
    { name: "email", component: EmailStep },
    { name: "age", component: AgeStep },
  ];

  return (
    <BuyFlow
      steps={steps}
      formState={formState}
      lastStepLink={routes.DESIGNER_INSURANCES_PAGE}
      validationSchema={developerFormSchema}
      productId={productId}
    />
  );
};
