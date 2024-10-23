var maxProfit = function (prices) {
  let maxProfit = 0;
  let minProfit = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minProfit) {
      minProfit = prices[i];
    } else if (prices[i] - minProfit > maxProfit) {
      maxProfit = prices[i] - minProfit;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
