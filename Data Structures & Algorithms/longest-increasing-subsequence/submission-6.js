class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        let sequenceLengths = new Array(nums.length).fill(1);

        let maxLength = 1;
        for (let start = nums.length - 2; start >= 0; start--) {
            for (let i = start + 1; i < nums.length; i++) {
                if (nums[start] < nums[i]) {
                    sequenceLengths[start] = Math.max(sequenceLengths[start], 1 + sequenceLengths[i]);
                }
            }
            maxLength = Math.max(sequenceLengths[start], maxLength);
        }

        return maxLength;
    }
}
