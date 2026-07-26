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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
    
        let string = "";
        function preorderTraverse(root) {
            if (root) {
                string += "," + root.val;
                preorderTraverse(root.left);
                preorderTraverse(root.right);
            }
            else {
                string += ",_";
            }
            return string;
        }

        let subRootString = preorderTraverse(subRoot);
        string = "";
        let rootString = preorderTraverse(root);

        return rootString.includes(subRootString);
    }
}
