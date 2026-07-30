class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a, b) => a - b);

        let combinations = [];
        let combination = [];

        function traverse(sum, start) {
            if (sum === target) {
                combinations.push([...combination]);
                return;
            }
            for (let i = start; i < nums.length; i++) {
                if (sum + nums[i] > target) {
                    break;
                }
                combination.push(nums[i]);
                traverse(sum + nums[i], i);
                combination.pop();
            }
        }
        traverse(0, 0);

        return combinations;
    }
}
