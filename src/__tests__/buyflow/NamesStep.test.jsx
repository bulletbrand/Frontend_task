import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MatchMediaMock from "jest-matchmedia-mock";
import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { object } from "yup";
import userEvent from "@testing-library/user-event";
import { AgeStep, NamesStep } from "../../pages/insurances-page/buyflow";
import { ageValidate } from "../../pages/insurances-page/buyflow/buyflow-validation-rules/buyflowValidationRules";
import { renderWithReactHookForm } from "../../utils/testUtils";

const nextStepCallback = jest.fn();
const prevStepCallback = jest.fn();
const isPrevStepVisible = true;

const validationSchema = object({
  firstName: ageValidate("First name"),
  lastName: ageValidate("Last name"),
});

const props = {
  defaultValues: {
    firstName: "",
    lastName: "",
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
      <NamesStep
        nextStepCallback={nextStepCallback}
        prevStepCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
      />,
      { ...{ ...props } }
    );

    expect(screen.getByPlaceholderText("First name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last name")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("Fields fills correctly", () => {
    renderWithReactHookForm(
      <NamesStep
        nextStepCallback={nextStepCallback}
        prevStepCallback={prevStepCallback}
        isPrevStepVisible={isPrevStepVisible}
      />,
      { ...props }
    );

    const firstNameField = screen.getByPlaceholderText("First name");
    expect(firstNameField.value).toBe("");
    userEvent.clear(firstNameField);
    fireEvent.change(firstNameField, { target: { value: "user" } });
    expect(firstNameField.value).toBe("user");

    const lastNameField = screen.getByPlaceholderText("Last name");
    expect(lastNameField.value).toBe("");
    userEvent.clear(lastNameField);
    fireEvent.change(lastNameField, { target: { value: "user2" } });
    expect(lastNameField.value).toBe("user2");
  });

  it("Next, Back callbacks calls", () => {
    renderWithReactHookForm(
      <NamesStep
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
      <NamesStep nextStepCallback={nextStepCallback} prevStepCallback={prevStepCallback} isPrevStepVisible={false} />,
      { ...props }
    );

    expect(screen.queryByText("Back")).not.toBeInTheDocument();
  });
});
