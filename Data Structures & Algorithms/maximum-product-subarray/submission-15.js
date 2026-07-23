class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {

        let max = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
        }

        let left = 0;
        let right = 0;
        let currentValue = 1;
        while (right < nums.length) {
            if (nums[right] === 0) {
                while (currentValue < 0) {
                    currentValue /= nums[left];
                    left++;
                }
                if (currentValue !== 1) {
                    max = Math.max(currentValue, max);
                }
                currentValue = 1;
                right++;
                left = right;
                continue;
            }
            currentValue *= nums[right];
            max = Math.max(currentValue, max);
            right++;
        }
        while (currentValue < 0) {
            currentValue /= nums[left];
            left++;
        }
        if (currentValue !== 1) {
            max = Math.max(currentValue, max);
        }

        return max;
    }
}
