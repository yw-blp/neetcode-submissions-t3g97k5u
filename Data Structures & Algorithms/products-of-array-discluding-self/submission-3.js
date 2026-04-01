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
                number *= Math.pow(i - 30, powers[i]);
            }
            return number;
        }

        let frequencyToProduct = new Array(numFrequency.length).fill(0);
        for (let i = 0; i < numFrequency.length; i++) {
            if (numFrequency[i] === 0) {
                continue;
            }
            numFrequency[i]--;
            frequencyToProduct[i] = powersToNumber(numFrequency);
            numFrequency[i]++;
        }
        //console.log(frequencyToProduct);
        for (let i = 0; i < nums.length; i++) {
            output.push(frequencyToProduct[nums[i] + 30]);
        }

        return output;
    }
}
