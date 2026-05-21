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

        let moneyAdjacency = Array.from({ length: amount + 1 }, () => []);;
        let numCoinsToReach = new Array(amount + 1).fill(-1);

        console.log(moneyAdjacency);

        let nodeHistory = [amount];
        let nodeHistoryContent = new Set();

        let currentNodeValue;
        let currentAdjacentValue;
        numCoinsToReach[amount] = 0;
        while (nodeHistory.length !== 0) {
            currentNodeValue = nodeHistory.shift();
            if (moneyAdjacency[currentNodeValue].length === 0) {
                for (const coin of coins) {
                    currentAdjacentValue = currentNodeValue - coin;
                    if (nodeHistoryContent.has(currentAdjacentValue) || currentAdjacentValue < 0) {
                        continue;
                    }
                    console.log(moneyAdjacency[currentNodeValue]);
                    moneyAdjacency[currentNodeValue].push(currentAdjacentValue);
                    if (!numCoinsToReach[currentAdjacentValue] >= 0) {
                        numCoinsToReach[currentAdjacentValue] = numCoinsToReach[currentNodeValue] + 1;
                    }
                    if (currentAdjacentValue === 0) {
                        console.log(moneyAdjacency);
                        return numCoinsToReach[currentAdjacentValue];
                    }
                    nodeHistory.push(currentAdjacentValue);
                    nodeHistoryContent.add(currentAdjacentValue);
                }
                //moneyAdjacency[currentNodeValue] = adjacentValues;
            }
        }

        return -1;
    }
}
