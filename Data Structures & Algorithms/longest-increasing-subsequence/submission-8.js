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

        let tails = [];
        let replaceIndex;
        for (const num of nums) {
            replaceIndex = binarySearchLeftInsert(tails, 0, tails.length, num);
            if (replaceIndex >= tails.length) {
                tails.push(num);
                continue;
            }
            tails[replaceIndex] = num;
        }
        
        let LISLength = tails.length;

        return LISLength;
    }
}
