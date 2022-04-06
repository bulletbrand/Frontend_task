import React from "react";
import "@testing-library/jest-dom/extend-expect";
import MatchMediaMock from "jest-matchmedia-mock";
import { fireEvent, screen } from "@testing-library/react";
import { DesignerInsurancesPage, DeveloperInsurancesPage, InsurancesPage } from "../../pages";
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
    renderWithMemory(<InsurancesPage />);
    expect(screen.getByText("Insurances")).toBeInTheDocument();
    expect(screen.getByText("Go to developer insurance")).toBeInTheDocument();
    expect(screen.getByText("Go to designer insurance")).toBeInTheDocument();
  });

  it("Navigation to developer insurances works fine", async () => {
    renderWithMemory(
      <>
        <InsurancesPage />
        <DeveloperInsurancesPage />
      </>
    );
    const devLink = screen.getByText("Go to developer insurance");
    fireEvent.click(devLink);
    expect(screen.getByText(/Welcome to Getsafe's developer insurance/i)).toBeInTheDocument();
  });

  it("Navigation to designer insurances works fine", async () => {
    renderWithMemory(
      <>
        <InsurancesPage />
        <DesignerInsurancesPage />
      </>
    );
    const desLink = screen.getByText("Go to designer insurance");
    fireEvent.click(desLink);
    expect(screen.getByText(/Welcome to Getsafe's designer insurance/i)).toBeInTheDocument();
  });
});
