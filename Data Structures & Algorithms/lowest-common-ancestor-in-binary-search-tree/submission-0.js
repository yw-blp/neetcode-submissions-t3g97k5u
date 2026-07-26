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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        //let pVisited = []; //[], []
        //let qVisited = [];
        let pTarget = p.val;
        let qTarget = q.val;
        p = root;
        q = root;
        let prev = null;
        while (p === q) {
            prev = p; // or q doesn't matter
            if (pTarget < p.val) {
                p = p.left;
            }
            else if (pTarget > p.val) {
                p = p.right;
            }
            if (qTarget < q.val) {
                q = q.left;
            }
            else if (qTarget > q.val) {
                q = q.right;
            }
        }
        
        return prev;
    }
}
