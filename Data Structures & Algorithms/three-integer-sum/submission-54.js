class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        let output = [];

        console.log(nums);
        for (let l = 0; l < nums.length - 1; l++) {
            if (nums[l] === nums[l - 1]) {
                continue;
            }
            let lr = l + 1;
            let r = nums.length - 1;
            while (lr < r) {
                if (nums[l] + nums[lr] + nums[r] === 0) {
                    output.push([nums[l], nums[lr], nums[r]]);
                    while (nums[lr] === nums[lr + 1]) {
                        lr++;
                    }
                    while (nums[r] === nums[r - 1]) {
                        r--;
                    }
                    lr++;
                    r--;
                }
                else if (nums[l] + nums[lr] + nums[r] < 0) {
                    lr++; // lessen amount of negative
                }
                else if (nums[l] + nums[lr] + nums[r] > 0) {
                    r--; // lessen amount of positive
                }
            }
        }

        return output;
    }
}
