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

        let moneyAdjacency = new Map();
        let numCoinsToReach = new Map();

        let nodeHistory = [amount];
        let nodeHistoryContent = new Set();

        let currentNodeValue;
        let currentAdjacentValue;
        let adjacentValues;
        numCoinsToReach.set(amount, 0);
        while (nodeHistory.length !== 0) {
            currentNodeValue = nodeHistory.shift();
            if (!moneyAdjacency.has(currentNodeValue)) {
                adjacentValues = [];
                for (const coin of coins) {
                    currentAdjacentValue = currentNodeValue - coin;
                    if (nodeHistoryContent.has(currentAdjacentValue) || currentAdjacentValue < 0) {
                        continue;
                    }
                    adjacentValues.push(currentAdjacentValue);
                    if (!numCoinsToReach.has(currentAdjacentValue)) {
                        numCoinsToReach.set(currentAdjacentValue, numCoinsToReach.get(currentNodeValue) + 1);
                    }
                    if (currentAdjacentValue === 0) {
                        return numCoinsToReach.get(currentAdjacentValue);
                    }
                    nodeHistory.push(currentAdjacentValue);
                    nodeHistoryContent.add(currentAdjacentValue);
                }
                moneyAdjacency.set(currentNodeValue, adjacentValues);
            }
        }

        return -1;
    }
}
