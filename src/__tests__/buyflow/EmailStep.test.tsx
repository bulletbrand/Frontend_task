import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MatchMediaMock from "jest-matchmedia-mock";
import { act, fireEvent, screen } from "@testing-library/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { object } from "yup";
import userEvent from "@testing-library/user-event";
import { EmailStep } from "../../pages/insurances-page/buyflow";
import { ageValidate } from "../../pages/insurances-page/buyflow/buyflow-validation-rules/buyflowValidationRules";
import { renderWithReactHookForm } from "../../utils/testUtils";

const nextStepCallback = jest.fn();
const prevStepCallback = jest.fn();
const isPrevStepVisible = true;

const validationSchema = object({
  email: ageValidate("Email"),
});

const props = {
  defaultValues: {
    email: "",
  },
  mode: "onTouched",
  reValidateMode: "onChange",
  resolver: yupResolver(validationSchema),
};

let matchMedia: MatchMediaMock;

describe("Age step tests", () => {
  beforeAll(async () => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("Age step renders correctly", () => {
    renderWithReactHookForm(
      <EmailStep
        nextStepCallback={nextStepCallback}
        prevStepCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
      />,
      { ...props }
    );

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("Fields fills correctly", async () => {
    renderWithReactHookForm(
      <EmailStep
        nextStepCallback={nextStepCallback}
        prevStepCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
      />,
      { ...props }
    );

    const emailField = screen.getByPlaceholderText("Email") as HTMLInputElement;
    expect(emailField.value).toBe("");
    await act(async () => {
      userEvent.clear(emailField);
      fireEvent.change(emailField, { target: { value: "user@gmail.com" } });
    });
    expect(emailField.value).toBe("user@gmail.com");
  });

  it("Next, Back callbacks calls", () => {
    renderWithReactHookForm(
      <EmailStep
        nextStepCallback={nextStepCallback}
        prevStepCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
      />,
      { ...props }
    );

    const nextBtn = screen.getByText("Next");
    const backBtn = screen.getByText("Back");
    fireEvent.click(nextBtn);
    expect(nextStepCallback).toHaveBeenCalledTimes(1);
    fireEvent.click(backBtn);
    expect(prevStepCallback).toHaveBeenCalledTimes(1);
  });

  it("Back callback invisible when isPrevStepVisible=false", () => {
    renderWithReactHookForm(
      <EmailStep nextStepCallback={nextStepCallback} prevStepCallback={prevStepCallback} isPrevStepVisible={false} />,
      { ...props }
    );

    expect(screen.queryByText("Back")).not.toBeInTheDocument();
  });
});
