class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let consecutiveMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            consecutiveMap.set(nums[i], nums[i] + 1);
        }
        
        let maxOutput = 0;
        for (const num of consecutiveMap.keys()) {
            let output = 0;
            let sequenceStartingPoint = num;
            while (consecutiveMap.has(sequenceStartingPoint)) {
                sequenceStartingPoint--;
            }
            sequenceStartingPoint++;
            output++;
            while (consecutiveMap.has(consecutiveMap.get(sequenceStartingPoint))) {
                consecutiveMap.delete(sequenceStartingPoint);
                sequenceStartingPoint++;
                output++;
            }
            if (output > maxOutput) {
                maxOutput = output;
            }
        }

        return maxOutput;
    }

}
