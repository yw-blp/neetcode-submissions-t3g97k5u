class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];

        let numFrequency = new Array(61).fill(0);
        for (let i = 0; i < nums.length; i++) {
            numFrequency[nums[i] + 30]++;
        }

        function powersToNumber(powers) {
            if (powers[30] > 0) {
                return 0;
            }
            let number = 1;
            for (let i = 0; i < powers.length; i++) {
                console.log(i - 30, powers[i], Math.pow(i - 30, powers[i]));
                number *= Math.pow(i - 30, powers[i]);
            }
            //console.log(number);
            return number;
        }
        //console.log(numFrequency);
        for (let i = 0; i < nums.length; i++) {
            numFrequency[nums[i] + 30]--;
            output.push(powersToNumber(numFrequency));
            numFrequency[nums[i] + 30]++;
        }

        return output;
    }
}
