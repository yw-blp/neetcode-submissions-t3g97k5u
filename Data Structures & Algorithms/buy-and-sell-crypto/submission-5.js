class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lowest = +Infinity;
        let highest = 0;
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < lowest) {
                lowest = prices[i];
            }
            else if (prices[i] - lowest > highest) {
                highest = prices[i] - lowest;
            }
        }
        return highest;
    }
}
