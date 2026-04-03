class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];

        nums.sort((a, b) => a - b);
        //let filteredNums = [nums[0]];
        //let hasDuplicates = 0;
        //let isDuplicate = false;
        //for (let i = 1; i < nums.length; i++) {
        //    isDuplicate = nums[i] === nums[i - 1];
        //    if (!isDuplicate || !(hasDuplicates >= 2)) {
        //        hasDuplicates = (isDuplicate) ? hasDuplicates + 1 : 0;
        //        filteredNums.push(nums[i]);
        //    }
        //}
        //nums = filteredNums;

        function valueFinderRightToLeft(l, r) {
            while (nums[r] >= 0 && l + 1 < r) {
                if (nums[r] === nums[r + 1]) {
                    r--;
                    continue;
                }
                for (let lr = r - 1; nums[lr] >= 0; lr--) {
                    if (nums[l] + nums[lr] + nums[r] === 0) {
                        output.push([nums[l], nums[lr], nums[r]]);
                        break;
                    }
                }
                r--;
            }
        }

        function valueFinderLeftToRight(l, r) {
            while (nums[l] < 0) {
                if (nums[l] === nums[l - 1]) {
                    l++;
                    continue;
                }
                for (let lr = l + 1; nums[lr] < 0; lr++) {
                    if (nums[l] + nums[lr] + nums[r] === 0) {
                        output.push([nums[l], nums[lr], nums[r]]);
                        break;
                    }
                }
                l++;
            }
        }

        let left = 0;
        let right = nums.length - 1;
        while (left + 1 < right) {
            if (-nums[left] >= nums[right]) {
                if (nums[left] !== nums[left - 1]) {
                    valueFinderRightToLeft(left, right);
                }
                left++;
            }
            else {
                if (nums[right] !== nums[right + 1]) {
                    valueFinderLeftToRight(left, right);
                }
                right--;
            }
        }

        return output;
    }
}
