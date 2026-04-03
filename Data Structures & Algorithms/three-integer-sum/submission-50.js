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

        let tripletSet = new Set();
        for (const first of frequencyMap.keys()) {
            frequencyMap.get(first)[0]--;
            for (const second of frequencyMap.keys()) {
                if (frequencyMap.get(second)[0] <= 0) {
                    continue;
                }
                frequencyMap.get(second)[0]--;
                let third = -(first + second);
                if (frequencyMap.has(third) && frequencyMap.get(third)[0] > 0) {
                    let sortedTriplet = sortTriplets([first, second, third]);
                    if (!tripletSet.has(sortedTriplet.join(","))) {
                        tripletSet.add(sortedTriplet.join(","))
                        output.push(sortedTriplet);
                    }
                }
                frequencyMap.get(second)[0]++;
            }
            frequencyMap.get(first)[0]++;
        }

        return output;
    }
}