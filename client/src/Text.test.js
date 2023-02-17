import { render, screen } from "@testing-library/react";
import Text from "./Text";

test("renders test text", () => {
  render(<Text />);
  const textElement = screen.getByText(/test text/i);
  expect(textElement).toBeInTheDocument();
});
