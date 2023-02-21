// {Math.round((restockCost + Number.EPSILON) * 100) / 100}
const totalCostCalculator = (item) => {
  return Math.round((item + Number.EPSILON) * 100) / 100;
};
export default totalCostCalculator;
