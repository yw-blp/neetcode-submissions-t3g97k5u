class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let right = 0;
        let left = 0;
        let bestProfit = 0;

        while (right < prices.length) {
            if (prices[right] < prices[left]) {
                left = right;
            }
            while (right < prices.length - 1 && prices[right] < prices[right + 1]) {
                right++;
            }
            if (prices[right] - prices[left] > bestProfit) {
                bestProfit = prices[right] - prices[left];
            }
            right++;
        }

        return bestProfit;
    }
}
