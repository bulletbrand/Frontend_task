import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MatchMediaMock from "jest-matchmedia-mock";
import { fireEvent, screen, act } from "@testing-library/react";
import { object } from "yup";
import userEvent from "@testing-library/user-event";
import { AgeStep, BuyFlow, EmailStep } from "../../pages/insurances-page/buyflow";
import {
  ageValidate,
  emailValidate,
} from "../../pages/insurances-page/buyflow/buyflow-validation-rules/buyflowValidationRules";
import { routes } from "../../routes/routes";
import { renderWithMemory } from "../../utils/testUtils";

const steps = [
  { name: "email", component: EmailStep },
  { name: "age", component: AgeStep },
];

const validationSchema = object({
  email: emailValidate("Email"),
  age: ageValidate("Age"),
});

const formState = {
  email: "",
  age: 0,
};

let matchMedia;

describe("Step renders correctly page tests", () => {
  beforeAll(async () => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("Component renders correctly", async () => {
    renderWithMemory(
      <BuyFlow
        steps={steps}
        validationSchema={validationSchema}
        productId="dev_ins"
        formState={formState}
        purchaseLink=""
      />
    );
    expect(screen.getByText("Buying developer insurance")).toBeInTheDocument();
    expect(screen.getByText("Step 1 of 2")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Email:")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("Step validation works correctly", async () => {
    renderWithMemory(
      <BuyFlow
        steps={steps}
        validationSchema={validationSchema}
        productId="dev_ins"
        formState={formState}
        purchaseLink=""
      />
    );

    const nextBtn = screen.getByText("Next");
    fireEvent.click(nextBtn);
    await act(async () => {
      fireEvent.click(nextBtn);
    });
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Step 1 of 2")).toBeInTheDocument();
  });

  it("Next step button works correctly", async () => {
    renderWithMemory(
      <BuyFlow
        steps={steps}
        validationSchema={validationSchema}
        productId="dev_ins"
        formState={formState}
        purchaseLink=""
      />
    );

    const nextBtn = screen.getByText("Next");
    const textField = screen.getByPlaceholderText("Email");

    const stepTitle = screen.getByTestId("step_title");
    // Email page shows and works correctly
    expect(stepTitle).toHaveTextContent("Step 1 of 2");
    userEvent.type(textField, "user@gmail.com");
    fireEvent.click(nextBtn);
    await act(async () => {
      fireEvent.click(nextBtn);
    });
    // Age page shows and works correctly
    expect(stepTitle).toHaveTextContent("Step 2 of 2");
    const ageField = screen.getByPlaceholderText("Age");
    userEvent.clear(ageField);
    fireEvent.change(ageField, { target: { value: "33" } });
    expect(ageField.value).toBe("33");
    await act(async () => {
      fireEvent.click(screen.getByText("Next"));
    });

    // Summary page shows correctly
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(screen.getAllByTestId("summary_field")).toHaveLength(2);
  });

  it("Back step button works correctly", async () => {
    renderWithMemory(
      <BuyFlow
        steps={steps}
        validationSchema={validationSchema}
        productId="dev_ins"
        formState={formState}
        purchaseLink={routes.DESIGNER_INSURANCES_PAGE}
      />
    );

    const nextBtn = screen.getByText("Next");
    const textField = screen.getByPlaceholderText("Email");

    const stepTitle = screen.getByTestId("step_title");
    userEvent.type(textField, "user@gmail.com");
    fireEvent.click(nextBtn);
    await act(async () => {
      fireEvent.click(nextBtn);
    });
    const backBtn = screen.getByText("Back");
    await act(async () => {
      fireEvent.click(backBtn);
    });
    expect(stepTitle).toHaveTextContent("Step 1 of 2");
  });
});
