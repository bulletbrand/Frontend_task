import React, { FC } from "react";
import { object } from "yup";
import { RouteComponentProps } from "react-router-dom";
import { ProductIds } from "../Insurances.types";
import { AgeStep, EmailStep } from "../buyflow";
import { BuyFlow } from "../buyflow/BuyFlow";
import { routes } from "../../../routes/routes";
import { ageValidate, emailValidate } from "../buyflow/buyflow-validation-rules/buyflowValidationRules";
import { IDeveloperForm, DeveloperOrderProps } from "./DeveloperInsurances.types";

const formState: IDeveloperForm = {
  email: "",
  age: 0,
};

const summaryFieldsOrder: DeveloperOrderProps = ["email", "age"];

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
      summaryFieldsOrder={summaryFieldsOrder}
      steps={steps}
      formState={formState}
      purchaseLink={routes.DESIGNER_INSURANCES_PAGE}
      validationSchema={developerFormSchema}
      productId={productId}
    />
  );
};
