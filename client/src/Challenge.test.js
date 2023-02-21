import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer"
import Challenge from "./Challenge";

describe("challenge page test suite", () => {
  beforeEach(() => {
    cleanup();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly and takes a snapshot of the component", () => {
    const tree = renderer.create(<Challenge />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("should render sku on page", () => {
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
  it("should make a fetch request", () => {
    const data = jest.fn(() => {
      fetch("http://localhost:4567/low-stock")
        .then((res) => res.json())
        .catch((err) => console.log(err));
    });
    expect(data).not.toBeNull();
    expect(fetch).toHaveBeenCalledTimes(0);
  });
});
