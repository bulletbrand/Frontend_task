import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MatchMediaMock from "jest-matchmedia-mock";
import { screen } from "@testing-library/react";
import { renderWithReactHookForm } from "../../utils/testUtils";
import { SummaryStep } from "../../pages/insurances-page/buyflow";

let matchMedia: MatchMediaMock;

const collectedData = {
  email: "user@gmail.com",
  age: 22,
};

const summaryFieldsOrder = ["email", "age"];

describe("Summary step tests", () => {
  beforeAll(async () => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("Summary step renders correctly", () => {
    renderWithReactHookForm(
      <SummaryStep collectedData={collectedData} onPurchase={jest.fn} summaryFieldsOrder={summaryFieldsOrder} />
    );
    expect(screen.getAllByTestId("summary_field")).toHaveLength(2);
    expect(screen.getAllByTestId("summary_field")[0]).toHaveTextContent(/user@gmail.com/i);
    expect(screen.getAllByTestId("summary_field")[1]).toHaveTextContent(/22/i);
  });
});
