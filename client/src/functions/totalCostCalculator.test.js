import totalCostCalculator from "./totalCostCalculator";
jest.mock("./totalCostCalculator", () => (item) => {
  return Math.round((item + Number.EPSILON) * 100) / 100;
});

describe("cost calculator test suite", () => {
  it("should be equal to the number passed in and not to be null", () => {
    const data = totalCostCalculator(1);
    expect(data).toBe(1);
    expect(data).not.toBe(2);
    expect(data).not.toBeNull();
  });
  it("should be defined and truthy", () => {
    const data = totalCostCalculator(2.5);
    expect(data).toBeDefined();
    expect(data).toBeTruthy();
  });
  it("should be greater than 3 and less than 6 when passed 5", () => {
    const data = totalCostCalculator(5);
    expect(data).toBeGreaterThan(3);
    expect(data).toBeLessThan(6);
  });
});
