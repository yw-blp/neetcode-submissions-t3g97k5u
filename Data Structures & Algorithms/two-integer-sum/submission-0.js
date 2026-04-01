class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let alt = new Map();
        let ans = -1;
        for (let i = 0; i < nums.length; i++) {
            alt.set((target - nums[i]), i);
        }
        for (let i = 0; i < nums.length; i++) {
            ans = alt.get(nums[i]);
            if (ans >= 0 && i !== ans) {
                return [i, ans];
            }
        }
    }
}
