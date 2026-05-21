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

        function createQueue() {
            const items = [];
            let headIndex = 0;
            return {
                enqueue: (item) => items.push(item),
                dequeue: () => {
                    if (headIndex >= items.length) return undefined; 
                    
                    const item = items[headIndex];
                    items[headIndex] = undefined;
                    headIndex++;
                    
                    return item;
                },
                peek: () => items[headIndex],
                isEmpty: () => items.length - headIndex === 0
            };
        }

        let moneyAdjacency = Array.from({ length: amount + 1 }, () => []);;
        let numCoinsToReach = new Array(amount + 1).fill(-1);

        let nodeHistory = createQueue();
        nodeHistory.enqueue(amount);
        let nodeHistoryContent = new Set();

        let currentNodeValue;
        let currentAdjacentValue;

        numCoinsToReach[amount] = 0;
        while (!nodeHistory.isEmpty()) {
            currentNodeValue = nodeHistory.dequeue();
            if (moneyAdjacency[currentNodeValue].length === 0) {
                for (const coin of coins) {
                    currentAdjacentValue = currentNodeValue - coin;
                    if (nodeHistoryContent.has(currentAdjacentValue) || currentAdjacentValue < 0) {
                        continue;
                    }
                    moneyAdjacency[currentNodeValue].push(currentAdjacentValue);
                    if (!numCoinsToReach[currentAdjacentValue] >= 0) {
                        numCoinsToReach[currentAdjacentValue] = numCoinsToReach[currentNodeValue] + 1;
                    }
                    if (currentAdjacentValue === 0) {
                        return numCoinsToReach[currentAdjacentValue];
                    }
                    nodeHistory.enqueue(currentAdjacentValue);
                    nodeHistoryContent.add(currentAdjacentValue);
                }
            }
        }

        return -1;
    }
}
