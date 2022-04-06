import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MatchMediaMock from "jest-matchmedia-mock";
import { fireEvent, screen } from "@testing-library/react";
import { DeveloperInsurancesPage, InsurancesPage } from "../../pages";
import { renderWithMemory } from "../../utils/testUtils";

let matchMedia: MatchMediaMock;

describe("Insurances page tests", () => {
  beforeAll(async () => {
    matchMedia = new MatchMediaMock();
  });

  afterEach(() => {
    matchMedia.clear();
  });

  it("Component renders correctly", async () => {
    renderWithMemory(<DeveloperInsurancesPage />);
    expect(screen.getByText("Welcome to Getsafe's developer insurance")).toBeInTheDocument();
    expect(screen.getByText("Get started!")).toBeInTheDocument();
    expect(screen.getByText("Back to insurances")).toBeInTheDocument();
  });

  it("Back link works correctly", async () => {
    renderWithMemory(
      <>
        <InsurancesPage />
        <DeveloperInsurancesPage />
      </>
    );
    const backLink = screen.getByText("Back to insurances");
    fireEvent.click(backLink);
    expect(screen.getByText("Insurances")).toBeInTheDocument();
  });
});
