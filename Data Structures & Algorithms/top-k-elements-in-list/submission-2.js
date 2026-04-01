class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let min = 1001;
        let max = -1001;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
            if (nums[i] > max) {
                max = nums[i];
            }
        }

        let numRange = max - min + 1;
        let numFrequency = new Array(numRange).fill(0);
        for (let i = 0; i < nums.length; i++) {
            numFrequency[nums[i] - min]++;
        }

        let numFrequencyValueToNum = new Map();
        for (let i = 0; i < numFrequency.length; i++) {
            if (!numFrequencyValueToNum.has(numFrequency[i])) {
                numFrequencyValueToNum.set(numFrequency[i], []);
            }
            numFrequencyValueToNum.get(numFrequency[i]).push(i + min);
        }

        numFrequency.sort((a, b) => a - b);
        let mostFrequentNums = [];
        for (let i = 0; i < k; i++) {
            mostFrequentNums.push(numFrequencyValueToNum.get(numFrequency.pop()).pop());
        }

        return mostFrequentNums;
    }
}
