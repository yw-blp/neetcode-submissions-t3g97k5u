class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
        this.length = 1;
    }

    attachTo(node) {
        if (!node) {
            return;
        }
        this.next = node;
        this.length = this.next.length + 1;
    }
}
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {

        let numChainLengths = new Array(nums.length).fill(1);

        //console.log(nums);

        let indexOfLongestChain;
        for (let start = nums.length - 2; start >= 0; start--) {
            indexOfLongestChain = start;
            for (let i = start + 1; i < nums.length; i++) {
                if (nums[start] < nums[i]) {
                    if (indexOfLongestChain === start || numChainLengths[indexOfLongestChain] < numChainLengths[i]) {
                        indexOfLongestChain = i;
                    }
                }
            }
            if (start < indexOfLongestChain) {
                numChainLengths[start] += numChainLengths[indexOfLongestChain];
            }
        }

        //console.log(numChainLengths);

        let maxLength = 0;
        for (let i = 0; i < nums.length; i++) {
            maxLength = Math.max(numChainLengths[i], maxLength);
        }

        return maxLength;
    }
}
