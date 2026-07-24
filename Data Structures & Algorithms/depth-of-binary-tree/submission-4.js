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
    maxDepth(root) {

        if (!root) {
            return 0;
        }
        
        let depth = 1;
        let maxDepth = 1;

        function traverse(node) {
            if (node.left) {
                depth++;
                traverse(node.left);
            }
            if (node.right) {
                depth++;
                traverse(node.right);
            }
            maxDepth = Math.max(depth, maxDepth);
            depth--;
        }

        traverse(root);
        
        return maxDepth;
    }
}
