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

        nums[2] = nums[0] + nums[2];
        for (let i = 3; i < nums.length; i++) {
            nums[i] = Math.max(nums[i - 3] + nums[i], nums[i - 2] + nums[i]);
        }

        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
        }
        
        return max;
    }
}











//if (nums.length & 1) {
//            nums.push(0);
//        }
//        let evenOddNums = [[], []];
//        for (let i = 0; i < nums.length; i += 2) {
//            evenOddNums[0].push(nums[i]);
//        }
//        for (let i = 1; i < nums.length; i += 2) {
//            evenOddNums[1].push(nums[i]);
//        }
//        console.log(evenOddNums[0]);
//        console.log(evenOddNums[1]);
//
//        //for (let i = 0; i < evenOddNums[0].length; i++) {
//        //    Math.max(evenOddNums[0][i], evenOddNums[1][i])
//        //}