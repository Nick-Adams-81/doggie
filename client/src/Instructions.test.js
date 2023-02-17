import { render, screen, fireEvent } from "@testing-library/react";
import Instructions from "./Instructions";

describe("instructions page tests", () => {
  test("should render topbloc coding challenge", () => {
    render(<Instructions />);
    const headerElement = screen.getByText(/topbloc coding challenge/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.innerHTML).toMatch(/topbloc coding challenge/i);
  });

  it("should have an element that says backend", () => {
    render(<Instructions />);
    const h2Element = screen.getByTestId("backend-header");
    expect(h2Element).toBeInTheDocument();
    expect(h2Element.innerHTML).toMatch(/Backend/);
  });

  it("should have an element that says workbooks", () => {
    render(<Instructions />);
    const h3Element = screen.getByTestId("workbooks-header");
    expect(h3Element).toBeInTheDocument();
    expect(h3Element.innerHTML).toMatch(/workbooks/i);
  });

  it("should have an element that says frontend", () => {
    render(<Instructions />);
    const h3Element = screen.getByTestId("frontend-header");
    expect(h3Element).toBeInTheDocument();
    expect(h3Element.innerHTML).toMatch(/frontend/i);
  });
});
