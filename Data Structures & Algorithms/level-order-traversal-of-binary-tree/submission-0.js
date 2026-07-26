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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) {
            return [];
        }
        
        let maxDepth = 1;
        function findMaxDepth(node, depth) {
            maxDepth = Math.max(depth, maxDepth);
            if (node.left) {
                findMaxDepth(node.left, depth + 1);
            }
            if (node.right) {
                findMaxDepth(node.right, depth + 1);
            }
        }
        findMaxDepth(root, 1);

        let output = Array.from({ length: maxDepth }, () => []);
        function traverse(node, depth) {
            output[depth].push(node.val);
            if (node.left) {
                traverse(node.left, depth + 1);
            }
            if (node.right) {
                traverse(node.right, depth + 1);
            }
        }
        traverse(root, 0);
        
        return output;
    }
}
