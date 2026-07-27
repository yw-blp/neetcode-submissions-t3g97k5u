/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {

        let max = -Infinity;
        function findMaxSum(node) {
            if (node) {
                let nodeValue = node.val;

                let leftNodeValue = findMaxSum(node.left) ?? 0;
                let rightNodeValue = findMaxSum(node.right) ?? 0;

                max = Math.max(max, nodeValue + leftNodeValue + rightNodeValue);
                nodeValue += Math.max(0, leftNodeValue, rightNodeValue);
                max = Math.max(max, nodeValue);
                
                return nodeValue;
            }
        }
        findMaxSum(root);

        return max;
    }
}
