import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MatchMediaMock from "jest-matchmedia-mock";
import { fireEvent, screen } from "@testing-library/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { object } from "yup";
import userEvent from "@testing-library/user-event";
import { AgeStep, EmailStep } from "../../pages/insurances-page/buyflow";
import { ageValidate } from "../../pages/insurances-page/buyflow/buyflow-validation-rules/buyflowValidationRules";
import { renderWithReactHookForm } from "../../utils/testUtils";

const nextStepCallback = jest.fn();
const prevStepCallback = jest.fn();
const isPrevStepVisible = true;

const validationSchema = object({
  age: ageValidate("Age"),
});

const props = {
  defaultValues: {
    age: 0,
  },
  mode: "onTouched",
  reValidateMode: "onChange",
  resolver: yupResolver(validationSchema),
};

let matchMedia;

describe("Age step tests", () => {
  beforeAll(async () => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("Age step renders correctly", () => {
    renderWithReactHookForm(
      <AgeStep
        nextStepCallback={nextStepCallback}
        prevStepCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
      />,
      { ...{ ...props } }
    );

    expect(screen.getByPlaceholderText("Age")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("Fields fills correctly", () => {
    renderWithReactHookForm(
      <AgeStep
        nextStepCallback={nextStepCallback}
        prevStepCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
      />,
      { ...props }
    );

    const ageField = screen.getByPlaceholderText("Age");
    expect(ageField.value).toBe("0");
    userEvent.clear(ageField);
    fireEvent.change(ageField, { target: { value: "22" } });
    expect(ageField.value).toBe("22");

    userEvent.clear(ageField);
    fireEvent.change(ageField, { target: { value: "3" } });
    expect(ageField.value).toBe("3");
  });

  it("Next, Back callbacks calls", () => {
    renderWithReactHookForm(
      <AgeStep
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
      <AgeStep nextStepCallback={nextStepCallback} prevStepCallback={prevStepCallback} isPrevStepVisible={false} />,
      { ...props }
    );

    expect(screen.queryByText("Back")).not.toBeInTheDocument();
  });
});
