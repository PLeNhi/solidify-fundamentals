var maxProfit = function(prices: number[]) {
    
    let minPrice = prices[0];
    let bestProfit = 0;
    let n = prices.length
    for(let i = 1; i < n; ++i)
    {
        if(prices[i] - minPrice > bestProfit)
        {
            bestProfit = prices[i] - minPrice;
        }
        if(prices[i] < minPrice)
        {
            minPrice = prices[i];
        }

    }

    return bestProfit;
}

console.log(maxProfit([7,1,5,3,6,4]))


//// Best ideal
function maxProfitOptimizeMemory(prices: number[]) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}