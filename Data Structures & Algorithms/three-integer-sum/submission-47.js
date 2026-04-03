class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let output = [];
        nums.sort((a, b) => a - b);

        function sortTriplets(array) {
            let [a, b, c] = array;
            if (a > b) [a, b] = [b, a];
            if (b > c) [b, c] = [c, b];
            if (a > b) [a, b] = [b, a];
            return [a, b, c];
        }

        let frequencyMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (!frequencyMap.has(nums[i])) {
                frequencyMap.set(nums[i], [0]);
            }
            frequencyMap.get(nums[i])[0]++;
        }

        let filteredNums = [nums[0]];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] !== nums[i - 1]) {
                filteredNums.push(nums[i]);
            }
        }
        nums = filteredNums;

        let tripletSet = new Set();
        for (let i = 0; i < nums.length; i++) {
            let first = nums[i];
            frequencyMap.get(first)[0]--;
            for (const second of frequencyMap.keys()) {
                if (frequencyMap.get(second)[0] <= 0) {
                    continue;
                }
                frequencyMap.get(second)[0]--;
                let third = -(first + second);
                if (frequencyMap.has(third) && frequencyMap.get(third)[0] > 0) {
                    let sortedTriplet = sortTriplets([first, second, third]);
                    if (tripletSet.has(sortedTriplet.join(","))) {
                        frequencyMap.get(second)[0]++;
                        continue;
                    }
                    tripletSet.add(sortedTriplet.join(","))
                    output.push(sortedTriplet);
                }
                frequencyMap.get(second)[0]++;
            }
            frequencyMap.get(first)[0]++;
            //console.log(tripletSet);
        }

        return output;
    }
}






        //let left = 0;
        //let right = nums.length - 1;
        //let target;
        //while (left + 1 < right) {
        //    target = -(nums[left] + nums[right]);
        //    frequencyMap.get(nums[left])[0]--;
        //    frequencyMap.get(nums[right])[0]--;
        //    if (frequencyMap.get(target) > 0) {
        //        output.push([nums[left], target, nums[right]]);
        //    }
        //    while (target <= nums[right]) {
        //        frequencyMap.get(nums[left])[0]++;
        //        right--;
        //    }
        //    while (target >= nums[left]) {
        //        frequencyMap.get(nums[right])[0]++;
        //        right--;
        //    }
        //    //else {
        //    //    frequencyMap.get(nums[right])[0]++;
        //    //    left++;
        //    //}
        //}