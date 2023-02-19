import { render, screen, fireEvent } from "@testing-library/react";
import Challenge, { handleClickLowStock } from "./Challenge";

describe("challenge page test suite", () => {
  it("should render sku on page", () => {
    render(<Challenge />);
    const skuText = screen.getByTestId("sku-text");
    expect(skuText).toBeInTheDocument();
  });
  it("should render item name in the page", () => {
    render(<Challenge />);
    const itemNameText = screen.getByText(/item name/i);
    expect(itemNameText).toBeInTheDocument();
  });
  it("should render total cost: in the page", () => {
    render(<Challenge />);
    const totalCost = screen.getByTestId("total-cost");
    expect(totalCost).toBeInTheDocument();
    expect(totalCost.innerHTML).toMatch(/total cost:/i);
  });
  it("should make a fetch request", async () => {
    const data = await handleClickLowStock;
    expect(handleClickLowStock).not.toBeNull();
  });
});
