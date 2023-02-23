
const totalCostCalculator = (item) => {
  return Math.round((item + Number.EPSILON) * 100) / 100;
};
export default totalCostCalculator;
