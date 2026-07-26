/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, leftHalf = null, rightHalf = null) {
 *         this.val = val;
 *         this.leftHalf = leftHalf;
 *         this.rightHalf = rightHalf;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inorderIndex = new Map();
        for (let i = 0; i < inorder.length; i++) {
            inorderIndex.set(inorder[i], i);
        }

        let i = -1;
        function divide(left, right) {
            if (left > right) {
                return null;
            }

            i++;
            let midpoint = inorderIndex.get(preorder[i]);
            console.log(inorder[left], inorder[midpoint], inorder[right]);
            if (!(left <= midpoint && midpoint <= right)) {
                console.log("no");
                return null;
            }

            if (left === right) {
                return new TreeNode(preorder[i]);
            }

            return new TreeNode(preorder[i], divide(left, midpoint - 1), divide(midpoint + 1, right));
        }

        return divide(0, inorder.length - 1);
    }
}
