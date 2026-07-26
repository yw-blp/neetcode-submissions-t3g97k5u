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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let output;
        function traverse(node) {
            if (node) {
                if (node.left) {
                    traverse(node.left);
                }
                k--;
                if (k === 0) {
                    output = node.val;
                }
                if (node.right) {
                    traverse(node.right);
                }
            }
        }
        traverse(root);
        return output;
    }
}
