import { render, screen, cleanup } from "@testing-library/react";
import Challenge from "../Challenge";
test('test', () => {
  expect(true).toBe(true)
})
test("should render challenge component", () => {
  render(<Challenge/>);
  const challengeElement = screen.getAllByTestId("totalCost");
  expect(challengeElement).toBeInTheDocument();
});


