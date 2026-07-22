class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        function multiply(arr) {
            let value = 1;
            for (let i = 0; i < arr.length; i++) {
                value *= arr[i];
            }
            return value;
        }

        let max = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            max = Math.max(nums[i], max);
        }
        
        let newNums = [];
        let currentValue = 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= 0) {
                if (currentValue !== 1) {
                    newNums.push(currentValue);
                    currentValue = 1;
                }
                newNums.push(nums[i]);
                continue;
            }
            currentValue = currentValue * nums[i];
        }
        if (currentValue !== 1) {
            newNums.push(currentValue);
        }

        let groupedNums = [];
        let group = [];
        for (let i = 0; i < newNums.length; i++) {
            if (newNums[i] === 0) {
                if (group.length > 0) {
                    groupedNums.push(group);
                    group = [];
                };
                continue;
            }
            group.push(newNums[i]);
        }
        if (group.length > 0) {
            groupedNums.push(group);
        };

        console.log(newNums);
        console.log(groupedNums);

        let current;
        for (let i = 0; i < groupedNums.length; i++) {
            current = multiply(groupedNums[i]);
            max = Math.max(current, max);
            console.log(current, max);
            if (current >= 0) {
                continue;
            }
            let subArrayValues = [current, current];
            let left = 0;
            let right = groupedNums[i].length - 1;
            while (subArrayValues[0] < 0 && left < groupedNums[i].length) {
                subArrayValues[0] /= groupedNums[i][left];
                left++;
            }
            while (subArrayValues[1] < 0 && right > 0) {
                subArrayValues[1] /= groupedNums[i][right];
                right--;
            }
            if (subArrayValues[0] === 1) {
                subArrayValues[0] = -Infinity;
            }
            if (subArrayValues[1] === 1) {
                subArrayValues[1] = -Infinity;
            }
            console.log(subArrayValues[0], subArrayValues[1], max);
            max = Math.max(subArrayValues[0], subArrayValues[1], max);
        }

        return max;
    }
}
