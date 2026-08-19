class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let total = 0;
        let highest = -Infinity;

        for (let i = 0; i < nums.length; i++) {
            highest = Math.max(nums[i], highest);

            if (total + nums[i] <= 0) {
                total = 0;
                continue;
            }
            
            total += nums[i];
            if (nums[i] > 0) {
                highest = Math.max(total, highest);
            }
        }

        return highest;
    }
}
