class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {

        let i = 0;
        let validSteps = 1;

        while (i < nums.length && validSteps > 0) {
            validSteps--;
            validSteps = Math.max(nums[i], validSteps);
            i++;
        }

        return i === nums.length;
    }
}
