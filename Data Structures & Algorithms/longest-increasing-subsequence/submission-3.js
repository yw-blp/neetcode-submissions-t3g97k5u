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

        let nodeNums = [];
        for (const num of nums) {
            nodeNums.push(new ListNode(num));
        }

        //console.log(nodeNums);

        let longestNode;
        for (let start = nodeNums.length - 1; start >= 0; start--) {
            longestNode = null;
            for (let i = start; i < nodeNums.length; i++) {
                if (nodeNums[start].val < nodeNums[i].val) {
                    if (!longestNode || longestNode.length < nodeNums[i].length) {
                        longestNode = nodeNums[i];
                    }
                }
            }
            nodeNums[start].attachTo(longestNode);
        }

        //console.log(nodeNums);

        let maxLength = 0;
        for (let i = 0; i < nodeNums.length; i++) {
            maxLength = Math.max(nodeNums[i].length, maxLength);
        }

        return maxLength;
    }
}
