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

        function isSameTree(p, q) {
            if (p.val !== q.val) {
                return false;
            }
            let flag = true;
            function traverse(p, q) {
                if (p.left && q.left) {
                    if (p.left.val === q.left.val) {
                        traverse(p.left, q.left);
                    }
                    else {
                        flag = false;
                        return;
                    }
                }
                else if (p.left || q.left) {
                    flag = false;
                    return;
                }
                if (p.right && q.right) {
                    if (p.right.val === q.right.val) {
                        traverse(p.right, q.right);
                    }
                    else {
                        flag = false;
                        return;
                    }
                }
                else if (p.right || q.right) {
                    flag = false;
                    return;
                }
            }
            traverse(p, q);
            return flag;
        }

        let isSub = false;
        function traverse(root) {
            if (isSameTree(root, subRoot)) {
                isSub = true;
                return;
            }
            if (root.left) {
                traverse(root.left);
            }
            if (root.right) {
                traverse(root.right);
            }
        }

        traverse(root);

        return isSub;

    }
}
