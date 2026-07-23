class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        if (nums.length === 1) {
            if (target === nums[0]) {
                return 0;
            }
            return -1;
        }

        let previousValue;
        function findMin(start, x) {
            if (x === 0) {
                if (nums[nums.length - 1] > nums[x]) {
                    return x;
                }
            }
            if (nums[x - 1] > nums[x]) {
                return x;
            }
            if (nums[x] > previousValue) {
                start = x;
                x = nums.length - 1;
            }
            if (nums[x - 1] < nums[x]) {
                previousValue = nums[x];
                x = Math.floor(start + ((x - start) / 2));
                return findMin(start, x);
            }
        }

        function findTarget(start, end) {
            let mid = Math.floor(start + ((end - start) / 2));
            if (target === nums[mid]) {
                return mid;
            }
            if (start >= end) {
                return -1;
            }
            if (target < nums[mid]) {
                return findTarget(start, mid - 1);
            }
            if (target > nums[mid]) {
                return findTarget(mid + 1, end);
            }
        }

        const midpoint = findMin(0, nums.length - 1);
        console.log(midpoint);

        return Math.max(findTarget(0, midpoint - 1), findTarget(midpoint, nums.length - 1));
    }
}