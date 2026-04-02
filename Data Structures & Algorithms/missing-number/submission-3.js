class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        if (nums.length === 1) {
            return nums[0] ^ 1;
        }

        let output = 0;
        for (let i = 0; i < nums.length; i++) {
            output = output ^ nums[i];
        }

        let endValue = 4294967295 >>> Math.clz32(nums.length);
        //console.log(nums.length.toString(2), endValue.toString(2));
        //console.log(output.toString(2));
        for (let i = nums.length + 1; i <= endValue; i++) {
            //console.log(i);
            output = output ^ i;
        }
        return output;
    }
}
