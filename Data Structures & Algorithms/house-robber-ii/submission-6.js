class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }
        if (nums.length === 2) {
            return Math.max(nums[0], nums[1]);
        }
        if (nums.length === 3) {
            return Math.max(nums[0], nums[1], nums[2]);
        }
        if (nums.length === 4) {
            return Math.max(nums[0] + nums[2], nums[1] + nums[3]);
        }

        let tempNums = [nums[nums.length - 3], nums[nums.length - 2], nums[nums.length - 1]];
        for (let i = 0; i < nums.length - 3; i++) {
            tempNums.push(nums[i]);
        }

        nums = [...tempNums];
        nums[3] = nums[0] + nums[3];
        nums[2] = nums[0] + nums[2];
        for (let i = 4; i < nums.length - 1; i++) {
            nums[i] = Math.max(nums[i - 3], nums[i - 2]) + nums[i];
        }
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
        }

        nums = [...tempNums];
        nums[3] = nums[1] + nums[3];
        for (let i = 4; i < nums.length; i++) {
            nums[i] = Math.max(nums[i - 3], nums[i - 2]) + nums[i];
        }
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
        }
        
        return max;
    }
}
