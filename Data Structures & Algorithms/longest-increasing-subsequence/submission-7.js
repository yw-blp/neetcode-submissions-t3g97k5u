class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        function binarySearchLeftInsert(arr, low, high, target) {
            if (low === high) {
                return low;
            }
            let mid = (low + high) >> 1;
            if (arr[mid] < target) {
                return binarySearchLeftInsert(arr, mid + 1, high, target);
            }
            else {
                return binarySearchLeftInsert(arr, low, mid, target);
            }
        }

        let longestSequence = [];
        let replaceIndex;
        for (const num of nums) {
            replaceIndex = binarySearchLeftInsert(longestSequence, 0, longestSequence.length, num);
            if (replaceIndex >= longestSequence.length) {
                longestSequence.push(num);
                continue;
            }
            longestSequence[replaceIndex] = num;
        }

        return longestSequence.length;
    }
}
