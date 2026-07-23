class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        let start = 0;
        let previousValue;
        function searchLeft(x) {
            if (x === 0) {
                if (nums[nums.length - 1] > nums[x]) {
                    return nums[x];
                }
            }
            if (nums[x - 1] > nums[x]) {
                return nums[x];
            }
            if (nums[x] > previousValue) {
                start = x;
                x = nums.length - 1;
            }
            if (nums[x - 1] < nums[x]) {
                previousValue = nums[x];
                x = Math.floor(start + ((x - start) / 2));
                return searchLeft(x);
            }
        }
        return searchLeft(nums.length - 1);
    }
}
