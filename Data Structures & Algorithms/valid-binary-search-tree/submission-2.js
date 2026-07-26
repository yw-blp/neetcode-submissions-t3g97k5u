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
     * @return {boolean}
     */
    isValidBST(root) {
        let flag = true;
        function traverse(node, lowest, highest) {
            if (!flag) {
                return;
            }
            if (node.left) {
                if (node.left.val < node.val && node.left.val > lowest) {
                    traverse(node.left, lowest, node.val);
                }
                else {
                    flag = false;
                    return;
                }
            }
            if (node.right) {
                if (node.right.val > node.val && node.right.val < highest) {
                    traverse(node.right, node.val, highest);
                }
                else {
                    flag = false;
                    return;
                }
            }
        }
        traverse(root, -Infinity, +Infinity);
        
        return flag;
    }
}
