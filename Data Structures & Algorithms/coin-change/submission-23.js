class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        if (amount === 0) {
            return 0;
        }

        let nodeHistory = [amount];
        let nodeHistoryContent = new Map();
        nodeHistoryContent.set(amount, 0);

        let currentNodeValue;
        let currentAdjacentValue;
        while (nodeHistory.length !== 0) {
            currentNodeValue = nodeHistory.shift();
            for (const coin of coins) {
                currentAdjacentValue = currentNodeValue - coin;
                if (nodeHistoryContent.has(currentAdjacentValue) || currentAdjacentValue < 0) {
                    continue;
                }
                nodeHistoryContent.set(currentAdjacentValue, nodeHistoryContent.get(currentNodeValue) + 1);
                if (currentAdjacentValue === 0) {
                    return nodeHistoryContent.get(currentAdjacentValue);
                }
                nodeHistory.push(currentAdjacentValue);
            }
        }

        return -1;
    }
}
