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
        let maxDepth = 0;

        if (!root) {
            return 0;
        }
        
        function traverse(node, depth) {
            maxDepth = Math.max(depth, maxDepth);
            if (node.left) {
                traverse(node.left, depth + 1);
            }
            if (node.right) {
                traverse(node.right, depth + 1);
            }
        }

        traverse(root, 1);
        
        return maxDepth;
    }
}
