import React, { FC } from "react";
import { object } from "yup";
import { RouteComponentProps } from "react-router-dom";
import { ProductIds } from "../Insurances.types";
import { IDesignerForm } from "./DesignerInsurances.types";
import { AgeStep, EmailStep, NamesStep } from "../buyflow";
import { BuyFlow } from "../buyflow/BuyFlow";
import { routes } from "../../../routes/routes";
import {
  ageValidate,
  emailValidate,
  textFieldValidate,
} from "../buyflow/buyflow-validation-rules/buyflowValidationRules";
import { IStep } from "../buyflow/Buyflow.types";

const formState: IDesignerForm = {
  email: "",
  age: 0,
  firstName: "",
  lastName: "",
};

const designerFormSchema = object({
  email: emailValidate("Email"),
  age: ageValidate("Age"),
  firstName: textFieldValidate("First name"),
  lastName: textFieldValidate("Last name"),
});

interface MatchParams {
  productId: ProductIds;
}

type Props = RouteComponentProps<MatchParams>;

export const DesignerBuyFlow: FC<Props> = ({ match }: Props): JSX.Element => {
  const { productId } = match.params;

  const steps: Array<IStep> = [
    { name: "email", component: EmailStep },
    { name: "age", component: AgeStep },
    { name: "names", component: NamesStep },
  ];

  return (
    <BuyFlow
      purchaseLink={routes.DEVELOPER_INSURANCES_PAGE}
      steps={steps}
      formState={formState}
      validationSchema={designerFormSchema}
      productId={productId}
    />
  );
};
