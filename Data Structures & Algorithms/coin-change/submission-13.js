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
        let numCoinsToReach = new Array(amount + 1).fill(-1);

        let nodeHistory = [amount];
        let nodeHistoryContent = new Set();

        let currentNodeValue;
        let currentAdjacentValue;
        let adjacentValues;
        numCoinsToReach[amount] = 0;
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
                    if (!numCoinsToReach[currentAdjacentValue] >= 0) {
                        numCoinsToReach[currentAdjacentValue] = numCoinsToReach[currentNodeValue] + 1;
                    }
                    if (currentAdjacentValue === 0) {
                        return numCoinsToReach[currentAdjacentValue];
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
