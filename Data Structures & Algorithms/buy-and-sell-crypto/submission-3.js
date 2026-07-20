class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let right = 0;
        let buyPrice = +Infinity;
        let bestProfit = 0;

        while (right < prices.length - 1) {
            if (prices[right] < buyPrice) {
                buyPrice = prices[right];
            }
            while (right < prices.length - 1 && prices[right] < prices[right + 1]) {
                right++;
            }
            if (prices[right] - buyPrice > bestProfit) {
                bestProfit = prices[right] - buyPrice;
            }
            right++;
        }

        return bestProfit;
    }
}
