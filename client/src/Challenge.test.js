import { render, screen, fireEvent } from "@testing-library/react";
import Challenge from "./Challenge";

describe("challenge page test suite", () => {
  test("should render sku page", () => {
    render(<Challenge />);
    const skuText = screen.getByTestId("sku-text");
    expect(skuText).toBeInTheDocument();
  });
  it("should render item name in the page", () => {
    render(<Challenge />);
    const itemNameText = screen.getByText(/item name/i);
    expect(itemNameText).toBeInTheDocument();
  });
  it("should return 4 when passed 2 and 2", () => {
    const add = (a, b) => {
      return a + b;
    };
    expect(add(2, 2)).toBe(4);
  });
});
